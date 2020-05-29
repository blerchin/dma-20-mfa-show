export default function TimeEngine(cb) {
  this.globalOffset = null;
  this.globalCurrent = null;
  this.systemTime = new Date().getTime();
  this.currentTime = null;
  this.globalCurrMin = null;
  this.globalCurrSec = null;
  this.isSetup = false;
  this.callback = cb;
  this.lock = false;
  this.keepTicking = true;
}

TimeEngine.prototype = {
  setup() {
      let fn = this.getGlobalTime.bind(this);
      fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")
        .then((body) => body.json())
        .then(fn);
  },

  getGlobalTime(json){
    console.log(`[⏰] 🌐 Grabbing data from API`);

        let utcLocal = json.unixtime + json.raw_offset + json.dst_offset;
        // let minutes = utcLocal / 60;
        // this.globalOffset = minutes % 60;
        this.globalOffset = utcLocal;
  
        this.systemTime = new Date().getTime();
  
        this.tick();
        this.isSetup = true;
        this.callback();
  },

  tick() {
    this.currentTime = new Date();
    var diff = this.currentTime.getTime() - this.systemTime;
    this.globalCurrent = diff / 1000;
    if (this.keepTicking){
      requestAnimationFrame(this.tick.bind(this));
    }
  },

  halt(){
    console.log(`[⏰] 🌐 Halt timer ticking`);
    this.keepTicking = false;
  },

  resume(){
    if (this.keepTicking === false){
      console.log(`[⏰] 🌐 Resume timer ticking`);
      this.keepTicking = true;
      this.tick();
    }
  },

  getOffsetMins(){
      let minutes = this.globalOffset / 60;
      return minutes % 60;
  },

  getCurrentMins(){    
      return this.getOffsetMins() + (this.globalCurrent / 60);
  },

  getCurrentMinsMod60(){
    return this.getCurrentMins() % 60;
  },

  getCurrentMilli(){
    return Math.floor(this.getCurrentMins() * 60 * 1000);
  },

  getCurrentMilliMod60(){
    return Math.floor(this.getCurrentMinsMod60() * 60 * 1000);
  },

  getCurrentSecs(){
    return Math.floor(this.getCurrentMins() * 60);
  },

  getAudioIndexFromTime(count){
      var time  = this.globalCurrent + this.globalOffset; //seconds
      var hours = (time / (60 * 60))% 24;
      return Math.floor(hours % (count));
  }
};
