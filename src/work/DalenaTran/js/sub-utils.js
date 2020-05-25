import * as Subtitle from 'subtitle'
import $ from 'jquery';

export default function SubEngine(voiceovers, cb, subcb) {
  this.voiceovers = voiceovers;
  this.setupCallback = cb;
  this.completed = 0;
  this.show = false;
  this.nextSubCallback = subcb;
  this.idx = null;
  this.voiceOverURL = "";
}

SubEngine.prototype = {
  setup() {
    for (let i = 0; i < this.voiceovers.length; i++) {
      this.voiceovers[i].sub = {};
      console.log(
        `[📜] 🌐 Grabbing ${this.voiceOverURL}/${this.voiceovers[i].srt}`
      );

      $.ajax({
        url: `${this.voiceOverURL}/${this.voiceovers[i].srt}`,
        dataType: "text",
        subEngine: this,
        idx: i,
        success: this.parseSub,
      });
    }
  },

  parseSub(data) {    
    this.subEngine.voiceovers[this.idx].sub.parsed = Subtitle.parse(data);
    this.subEngine.voiceovers[this.idx].sub.isHeadSet = false;
    this.subEngine.completed++;
    if (this.subEngine.completed === this.subEngine.voiceovers.length) {
      this.subEngine.setupCallback();
    }
  },

  setPlayhead(idx, val) {
    this.idx = idx;
    this.voiceovers[idx].sub.playhead = val;
    this.voiceovers[idx].sub.isHeadSet = true;
    // var sub = this.voiceovers[idx].sub.parsed[val];
  },

  seek(idx, time) {
    let sub = this.voiceovers[idx].sub.parsed;
    this.idx = idx;

    for (let i = 0; i < sub.length; i++) {
      if (time >= sub[i].start && time <= sub[i].end) {
        console.log("[📜] 🎬 Initial playhead set for current subframe");
        this.setPlayhead(idx, i);
        break;
      } else if (
        i !== sub.length - 1 &&
        time >= sub[i].end &&
        time <= sub[i + 1].start
      ) {
        console.log("[📜] 🎬 Initial playhead set for next subframe");
        this.setPlayhead(idx, i + 1);
        break;
      }
    }
  },

  play(idx, time) {
    if (this.voiceovers[idx].sub.isHeadSet) {
      let head = this.voiceovers[idx].sub.playhead;
      // console.log(head);
      this.idx = idx;

      let sub = this.voiceovers[idx].sub.parsed;
      if (time >= sub[head].start && time <= sub[head].end) {
        this.show = true;
      } else if (
        head !== sub.length - 1 &&
        time >= sub[head + 1].start &&
        time <= sub[head + 1].end
      ) {
        let head = this.voiceovers[idx].sub.playhead++;
        this.show = true;
        let sb = this.voiceovers[this.idx].sub.parsed[head];

        console.log(`[📜] 🎬 Playhead updated to
      \t${Subtitle.toSrtTime(sb.start)} - ${Subtitle.toSrtTime(sb.end)}`);
        this.nextSubCallback(this.show, true, this.getText());
      } else {
        if (this.show) {
          this.nextSubCallback(this.show, false, "");
        }
        this.show = false;
      }
    }
    else{
      this.seek(idx, time);
    }
  },

  getText() {
    let head = this.voiceovers[this.idx].sub.playhead;
    return this.voiceovers[this.idx].sub.parsed[head].text;
  },
};
