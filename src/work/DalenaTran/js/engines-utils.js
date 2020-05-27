import AudioEngine from "./audio-utils";
import TimeEngine from "./time-utils";
import SubEngine from "./sub-utils";

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
  this.voVolume = 1;
  this.baseURL = "https://users.dma.ucla.edu/~dalena/ait";
  this.voiceOverBase = "audio-voiceover";
  this.bgSoundBase = "audio-bg";
  this.startOn = 0;
  this.startEveryXMins = 6;
  this.startOnTheHour = false;
  this.destroyed = false;
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
    this.audioEngine = new AudioEngine(
      this.voiceovers,
      this.audioSetupComplete.bind(this)
    );
    this.audioEngine.bgURL = bgSoundBaseURL;
    this.audioEngine.voiceOverURL = voBaseURL;
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
      this.element.textContent = text;
    } else if (this.voice && this.voice.playing()) {
      this.element.textContent = "";
    }
  },

  triggerVoiceover() {
    console.log(`[⚙️] 📥 Voiceover onload triggered`);
    var voiceDur = this.voice._duration;
    var currTimeSecs = this.timeEngine.getCurrentMinsMod60() * 60;

    let beginAt = 0;
    if (this.startOnTheHour){
      beginAt = currTimeSecs;
    }
    else{
      beginAt = currTimeSecs % (this.startEveryXMins * 60)
    }

    if (beginAt < voiceDur) {
      console.log(`[⚙️] 🔊 Playing voiceover ${this.idx}
      \tAudio: ${this.voiceovers[this.idx].audio}
      \tStarting at ${currTimeSecs}`);

      this.voice.on("end", this.showCountdown.bind(this))

      this.subEngine.resetPlayHead();
      this.subEngine.seek(this.idx, beginAt * 1000);
      this.voice.seek(beginAt);
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

  halt() {
    console.log(`[⚙️] 🛑 Engines halting`);
    this.audioEngine.destroy();
    this.destroyed = true;
  },

  resume(){
    console.log(`[⚙️] ▶️ Engines resumed`);
    this.destroyed = false;
  },

  showCountdown() {
    console.log(`[⚙️] ⏱️ Countdown show`);
    this.displayCountdown = true;
    document.getElementById("AITCountTxt").className = "";
  },

  hideCountdown() {
    console.log(`[⚙️] ⏱️ Countdown hide`);
    this.displayCountdown = false;
    document.getElementById("AITCountTxt").className = "hidden";
  },

  updateCountdown() {
     if (!this.destroyed && this.displayCountdown && this.timeEngine.isSetup) {
      let base = this.startOnTheHour ? 60 : this.startEveryXMins
      let remMin = base - (this.timeEngine.getCurrentMinsMod60() % base);
      remMin = Math.floor(remMin % base);
      remMin = remMin.toString().padStart(2, "0");

      let remSecs = this.timeEngine.getCurrentSecs();
      remSecs = 60 - Math.floor(remSecs % 60);
      remSecs = remSecs.toString().padStart(2, "0");

      let AITCountMins = document.getElementById("AITCountMins")
      let AITCountSecs = document.getElementById("AITCountSecs")
      if (AITCountSecs && AITCountMins){
        AITCountMins.textContent = remMin;
        AITCountSecs.textContent = remSecs;
      }
    }
    requestAnimationFrame(this.updateCountdown.bind(this));
  },

  voiceoverUpdate() {
    requestAnimationFrame(this.voiceoverUpdate.bind(this));

    if (!this.destroyed && this.timeEngine.isSetup) {
      this.timeEngine.tick();
      var minsPassed = Math.floor(this.timeEngine.getCurrentMinsMod60());

      let flag = false;

      if (this.startOnTheHour){
        flag = (minsPassed === this.startOn)
      }
      else{
        flag = !(minsPassed % this.startEveryXMins)
      }

      if (flag && !this.timeEngine.lock) {
        this.prepareVoiceover();
      }

      if (!flag && this.timeEngine.lock) {
        this.timeEngine.lock = false;
      }

      if (this.voice && this.voice.playing()){
        this.subEngine.play(this.idx, this.voice.seek() * 1000);
      }
    }
  },
};
