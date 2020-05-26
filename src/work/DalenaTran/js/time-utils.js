export default function TimeEngine(cb) {
  this.globalOffset = null;
  this.globalCurrent = null;
  this.systemTime = null;
  this.currentTime = null;
  this.globalCurrMin = null;
  this.globalCurrSec = null;
  this.isSetup = false;
  this.callback = cb;
  this.lock = false;
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
  
        this.systemTime = new Date();
  
        this.tick();
        this.isSetup = true;
        this.callback();
  },

  tick() {
    this.currentTime = new Date();
    var diff = this.currentTime.getTime() - this.systemTime.getTime();
    this.globalCurrent = diff / 1000;
    // let seconds = diff / 1000;
    // let minutes = seconds / 60;
    // this.globalCurrMin = Math.floor(this.globalOffset + minutes);
    // this.globalCurrSec = Math.floor((this.globalOffset + minutes)*60)%60;
    // console.log(this.globalCurrMin, this.globalCurrSec);
  },

  getOffsetMins(){
      let minutes = this.globalOffset / 60;
      return minutes % 60;
  },

  getCurrentMins(){
      return this.getOffsetMins() + (this.globalCurrent / 60);
  },

  getCurrentMilli(){
    return Math.floor(this.getCurrentMins() * 60 * 1000);
  },

  getCurrentSecs(){
    return Math.floor(this.getCurrentMins() * 60);
  },

  getAudioIndexFromTime(count){
      var time  = this.globalCurrent + this.globalOffset;
      var hours = (time / (60 * 60))% 24;
      return Math.floor(hours % (count));
  }
};
