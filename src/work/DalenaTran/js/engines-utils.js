import AudioEngine from "./audio-utils";
import TimeEngine from "./time-utils";
import SubEngine from "./sub-utils";
import $ from "jquery";

export default function Engines() {
  this.audioIsSetup = false;
  this.timeIsSetup = false;
  this.subsIsSetup = false;
  this.idx = null;
  this.voice = null;
  this.audioEngine = null;
  this.timeEngine = null;
  this.subEngine = null;
  this.voiceovers = null;
  this.element = null;
  this.dataDir = "data";
  this.displayCountdown = true;
  this.alreadyTriggered = false;
  this.voVolume = 0.1;
  this.baseURL = "https://dalena.github.io/acts-in-translation/data";
  this.voiceOverBase = "audio-voiceover";
  this.bgSoundBase = "audio-bg";
  this.releasesURL = "https://github.com/dalena/acts-in-translation-data/releases/download";
  this.voiceOverRelease = "voiceovers-5-24";
  this.bgSoundRelease = "bgsounds-5-24";
}

Engines.prototype = {
  setup(audioData, voiceoverData) {
    this.voiceovers = voiceoverData;
    this.setupAll(audioData, voiceoverData);

    console.log(`[⚙️] 🌐 Loaded Voiceover Data
    ${voiceoverData}`);
  },

  setupAll(audioData, voiceoverDataFile) {
    let voBaseURL = `${this.baseURL}/${this.voiceOverBase}/`;
    let bgSoundBaseURL = `${this.baseURL}/${this.bgSoundBase}/`;
    let voReleaseURL = `${this.releasesURL}/${this.voiceOverRelease}/`;
    let bgSoundReleaseURL = `${this.releasesURL}/${this.bgSoundRelease}/`;
    this.audioEngine = new AudioEngine(
      this.voiceovers,
      this.audioSetupComplete.bind(this)
    );
    this.audioEngine.bgURL = bgSoundReleaseURL;
    this.audioEngine.voiceOverURL = voReleaseURL;
    this.audioEngine.setup(audioData);

    this.timeEngine = new TimeEngine(this.timeSetupComplete.bind(this));
    this.timeEngine.setup();

    this.subEngine = new SubEngine(
      this.voiceovers,
      this.subsSetupComplete.bind(this),
      this.showNextSub.bind(this)
    );
    this.subEngine.voiceOverURL = voBaseURL;
    this.subEngine.setup();
  },

  setHTMLElement(val) {
    this.element = val;
  },

  checkIfAllSetupComplete() {
    if (this.audioIsSetup && this.subsIsSetup && this.timeIsSetup) {
      console.log(`[⚙️] ✔️ ALL ENGINGES SUCCESSFULLY SETUP`);
      this.updateCountdown();
      // this.prepareVoiceover();
    }
  },

  audioSetupComplete() {
    console.log(`[⚙️] ✔️ AUDIO SETUP COMPLETED`);
    this.audioIsSetup = true;
    this.checkIfAllSetupComplete();
  },

  timeSetupComplete() {
    console.log(`[⚙️] ✔️ TIMER SETUP COMPLETED`);
    this.timeIsSetup = true;
    this.checkIfAllSetupComplete();
  },

  subsSetupComplete() {
    console.log(`[⚙️] ✔️ SUBTITLE SETUP COMPLETED`);
    this.subsIsSetup = true;
    this.checkIfAllSetupComplete();
  },

  showNextSub(show, flag, text) {
    if (show && flag && this.voice && this.voice.playing()) {
      $(this.element).text(text);
    } else if (this.voice && this.voice.playing()) {
      $(this.element).text("");
    }
  },

  triggerVoiceover() {
    console.log(`[⚙️] 📥 Voiceover onload triggered`);
    var voiceDur = this.voice._duration;
    var currTimeSecs = this.timeEngine.getCurrentMins() * 60;
    var currTimeMilli = this.timeEngine.getCurrentMilli();

    if (currTimeSecs < voiceDur) {
      console.log(`[⚙️] 🔊 Playing voiceover ${this.idx}
      \tAudio: ${this.voiceovers[this.idx].audio}
      \tStarting at ${currTimeSecs}`);

      this.voice.on("end", this.showCountdown.bind(this));

      this.subEngine.seek(this.idx, currTimeMilli);
      this.voice.seek(currTimeSecs);
      this.voice.play();
      this.hideCountdown();
    }
    this.alreadyTriggered = true;
    this.voiceoverUpdate();
  },

  prepareVoiceover(manual = null) {
    this.timeEngine.lock = true;

    if (manual && this.alreadyTriggered) {
      return;
    }

    if (this.voice) {
      this.voice.stop();
      this.voice.unload();
      this.audioEngine.setupVoiceovers();
      this.voice = null;
    }

    this.idx = this.timeEngine.getAudioIndexFromTime(this.voiceovers.length);
    this.voice = this.audioEngine.getVoiceOverHowler(this.idx);
    this.voice.volume(this.voVolume);
    this.voice.load();
    this.voice.on("load", this.triggerVoiceover.bind(this));
  },

  stopEngine() {
    this.audioEngine.pauseAudio();
    this.voice.stop();
  },

  showCountdown() {
    console.log(`[⚙️] ⏱️ Countdown show`);
    this.displayCountdown = true;
    $("#AITCountTxt").fadeIn(2000);
  },

  hideCountdown() {
    console.log(`[⚙️] ⏱️ Countdown hide`);
    this.displayCountdown = false;
    $("#AITCountTxt").fadeOut(2000);
  },

  updateCountdown() {
     if (this.displayCountdown && this.timeEngine.isSetup) {
      let remMin = 60 - this.timeEngine.getCurrentMins();
      remMin = Math.floor(remMin);
      remMin = remMin.toString().padStart(2, "0");

      let remSecs = this.timeEngine.getCurrentSecs();
      remSecs = 60 - Math.floor(remSecs % 60);
      remSecs = remSecs.toString().padStart(2, "0");

      $("#AITCountMins").text(remMin);
      $("#AITCountSecs").text(remSecs);
    }
    requestAnimationFrame(this.updateCountdown.bind(this));
  },

  voiceoverUpdate() {
    requestAnimationFrame(this.voiceoverUpdate.bind(this));

    if (this.timeEngine.isSetup) {
      this.timeEngine.tick();
      var minsPassed = Math.floor(this.timeEngine.getCurrentMins() % 60);
      let startOn = 0;

      if (minsPassed === startOn && !this.timeEngine.lock) {
        this.prepareVoiceover();
      }

      if (minsPassed !== startOn && this.timeEngine.lock) {
        this.timeEngine.lock = false;
      }

      if (this.voice && this.voice.playing()){
        this.subEngine.play(this.idx, this.voice.seek() * 1000);
      }
    }
  },
};