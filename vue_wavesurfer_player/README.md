Simple Vue wraper for wavesurfer.js

![alt text](https://github.com/SetasSan/vue_wavesurfer_player/blob/master/.github/Player.PNG?raw=true)


<a href="https://github.com/SetasSan/vue_wavesurfer_player/blob/master/vue_wavesurfer_player/src/App.vue" target="_blank">Example</a>

## Usage
```sh
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import WavesurferPlugin from './WavesurferPlugin';

const app = createApp(App);
app.use(WavesurferPlugin);
app.mount('#app')

import type { WavesurferOptions } from "vue-wavesurfer-player/dist/components/WavesurferOptions";

//import styles
<style>
  @import 'vue-wavesurfer-player/styles.css';
</style>

let options: WavesurferOptions = {
  waveColor: "violet",
  progressColor: "purple",
  scrollParent: false,
  backend: "WebAudio",
  barHeight: .8,
  cursorWidth: 3,
  cursorColor: "#eb7ee9",
  height: 64,
  barWidth: 0.1,
  barGap: 1.5
} as WavesurferOptions;
    
<Wavesurfer
  class="wave-surfer-item"
  :options="wavesurferOption1"
  src="./../soundEffect.wav"
  effectName="Cick effect"
  :showDuration="true"
></Wavesurfer>


// or with base64 file
<Wavesurfer
  class="wave-surfer-item"
  :options="wavesurferOption2"
  :srcBase64="fileAsBlob"
  :showDuration="true"
  effectName="Cick effect 2"
></Wavesurfer>


by adding: ref="playerRef"
like
<Wavesurfer
  ref="playerRef"
  class="wave-surfer-item"
  :options="wavesurferOption2"
  :srcBase64="fileAsBlob"
  :showDuration="true"
  effectName="Cick effect 2"
></Wavesurfer>

you can access functions like:
this.$refs.playerRef.loadBlob(this.fileAsBlob2);
this.$refs.playerRef.loadFile("your_file_url");
this.$refs.playerRef.getDurationInMiliSeconds();
this.$refs.playerRef.getDurationAsString();
```