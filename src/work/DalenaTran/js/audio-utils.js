import {Howl} from 'howler';

function AudioEngine(voiceovers, cb) {
  this.isDataLoaded = false;
  this.isHowlSetup = false;
  this.data = null;
  this.que = [];
  this.bgURL = "";
  this.voiceOverURL = "";
  this.format = 'mp3';
  this.persPerc = 0.8;
  this.persSec = 30;
  this.idx = 0;
  this.voiceovers = voiceovers;
  this.callback = cb;
  this.g = {
    howlerA: "",
    howlerB: "",
    len: "",
  };
}

AudioEngine.prototype = {
  audioSetup() {
    console.log(`[🎵] 📥 Begin loading audio files`);
    this.g.howlerA = this.createSound(this.getidx(), "A");
    this.g.howlerB = this.createSound(this.getidx(), "B");

    document.getElementById("AITLocA").textContent = this.getLoc(this.g.howlerA);
    document.getElementById("AITLocB").textContent = this.getLoc(this.g.howlerB);

    // this.g.howlerA.play();
    // this.g.howlerB.play();

    this.isHowlSetup = true;
    this.callback();
  },

  beginAudio() {
    if (this.isDataLoaded && !this.isHowlSetup) {
      this.audioSetup();
    }

    if (
      this.isHowlSetup &&
      !this.g.howlerA.playing() &&
      !this.g.howlerB.playing()
    ) {
      this.g.howlerA.play();
      this.g.howlerB.play();
    }
  },

  pauseAudio(){
    this.g.howlerA.pause();
    this.g.howlerB.pause();
  },

  setup(_data) {  
      this.data = _data;

      this.populateQue(this.data.len, this.que);

      this.g.len = this.data.len;

      this.audioSetup();
      this.isDataLoaded = true;

    console.log(`[🎵] 🌐 Data Loaded`);

    this.setupVoiceovers();
  },

  setupVoiceovers(){   
    for (let i = 0; i < this.voiceovers.length; i++){
      this.voiceovers[i].howler = new Howl({
        src: `${this.voiceOverURL}/${this.voiceovers[i].audio}`,
        volume: 1,
        html5: true,
        preload: true,
      });
    }
  },

  getVoiceOverHowler(idx){
    return this.voiceovers[idx].howler;
  },

  getLoc(obj) {
    let key = obj._idx;
    key = key.toString();
    let s = this.data["audios"][key].loc;
    return s;
  },

  getidx() {
    let temp = this.idx;
    this.idx++;

    if (this.idx === this.g.len) {
      console.log("[🎵] 🔀 Reshuffling que");
      this.shuffle(this.que);
      this.idx = 0;
    }

    return this.que[temp];
  },

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  },

  populateQue(len, que) {
    for (let i = 0; i < len; i++) {
      this.que.push(i);
    }
    this.shuffle(this.que);
  },

  randinlen(len) {
    return Math.floor(Math.random() * len);
  },

  createSound(idx, objIdent, _autoPlay = false) {
    let audioPath = `${this.bgURL}/${idx}.${this.format}`;
    
    console.log(`[🎵] ⭐ Creating ${audioPath}
    \tLocation: ${this.data.audios[idx].loc}
    \tFile: ${this.data.audios[idx].name}
    \tIDX: ${this.data.audios[idx].idx}`);

    let aud = new Howl({
      src: audioPath,
      volume: 1,
      html5: true,
      preload: true,
      // Change below from initPerInterval to step if want to
      // run per animation frame (browser repaint)
      onplay: this.initPerInterval,
      onend: this.reassignSound,
      autoplay: _autoPlay,
      // onplayerror: playError,
    });

    aud._ngin = this;
    aud._idx = idx;
    aud._isfadingout = false;
    aud._isfadingin = false;
    aud._objident = objIdent;
    return aud;
  },

  playError() {
    this.once("unlock", function () {
      this.play();
    });
  },

  reassignSound() {
    let prevIdx = this._idx;
    let nextIdx = this._ngin.getidx();
    let objIdent;
    if (this._objident === "A") {
      this._ngin.g.howlerA = this._ngin.createSound(nextIdx, "A", true);
      objIdent = "A";
    } else {
      objIdent = "B";
      this._ngin.g.howlerB = this._ngin.createSound(nextIdx, "B", true);
    }

    console.log(`[🎵] ♻️ Reassigning ${objIdent}
    \tFrom: ${prevIdx}
    \tTo: ${nextIdx}`);
  },

  initPerInterval() {
    if (this.playing()) {
      setInterval(this._ngin.step.bind(this), 1000.0 / 24.0);
    }
  },

  step() {
    if (this.playing()) {
      // // Duration based fading
      let persSec = this._ngin.persSec;
      let currPerc = this.seek();
      let secsToFade = this._ngin.persSec;
      let fadeinFlag = currPerc <= persSec && this._isfadingin === false;
      let fadeoutFlag = currPerc >= ( this._duration - persSec) && this._isfadingout === false;
      
      // // Percentage based fading
      // let persPerc = this._ngin.persPerc;
      // let currPerc = this.seek() / this._duration;
      // let secsToFade = this._duration * (1.0 - persPerc);
      // let fadeinFlag = currPerc <= 1 - persPerc && this._isfadingin == false;
      // let fadeoutFlag = currPerc >= persPerc && this._isfadingout == false;

      if (fadeinFlag) {
        this._ngin.howlFadein(this, currPerc, secsToFade);
      }

      if (fadeoutFlag) {
        this._ngin.howlFadeout(this, currPerc, secsToFade);
        // this._ngin.playTheOther(this);
      }
    }
  },

  howlFadein(ctx, currPerc, secsToFade) {
    ctx._isfadingin = true;
    let dur = secsToFade *200;
    let animDur = dur;

    console.log("[🎵] ⬇️ Fading in:", ctx._objident);
    ctx.fade(0, 1, dur);

    const locId = ctx._objident === "A" ? "AITLocA" : "AITLocB";
    const loc = document.getElementById(locId);
    loc.textContent = this.getLoc(ctx);
    loc.style.transition = `opacity ${animDur}ms ease-in-out`;
    loc.className = "";
  },

  howlFadeout(ctx, currPerc, secsToFade) {
    ctx._isfadingout = true;
    let dur = secsToFade * 1000;
    let animDur = dur;

    console.log("[🎵] ⬆️ Fading out:", ctx._objident);
    ctx.fade(1, 0, dur);

    const locId = ctx._objident === "A" ? "AITLocA" : "AITLocB";
    const loc = document.getElementById(locId);
    loc.style.transition = `opacity ${animDur}ms ease-in-out`;
    loc.className = "hidden";
  },

  playTheOther(ctx) {
    if (ctx._objident === "A") {
      this.g.howlerB.play();
    } else {
      this.g.howlerA.play();
    }
  },
};

export default AudioEngine;