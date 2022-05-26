Simple Vue wraper for wavesurfer.js

![alt text](https://github.com/SetasSan/vue_wavesurfer_player/blob/master/.github/Player.PNG?raw=true)

## Usage
```sh
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
  durationValue="00:02"
></Wavesurfer>

// or with base64 file
<Wavesurfer
  class="wave-surfer-item"
  :options="wavesurferOption2"
  :srcBase64="fileAsBlob"
  durationValue="00:02"
  effectName="Cick effect 2"
></Wavesurfer>
```