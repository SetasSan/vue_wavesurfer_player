<script lang="ts">
import { defineComponent } from "vue";
import WaveSurfer from "wavesurfer.js";
import { WavesurferOptions } from "./WavesurferOptions";
import PauseButtonIcon from "../../Icons/PauseButtonIcon.vue";
import PlayButtonIcon from "../../Icons/PlayButtonIcon.vue";

export default defineComponent({
    props: {
        src: String,
        options: Object as () => WavesurferOptions,
        durationValue: String,
        effectName: String,
        srcBase64: String,
    },
    data() {
        return {
            playing: false,
        };
    },
    mounted() {
        this.wavesurfer = WaveSurfer.create(this.options);
        if (this.src === undefined) {
            this.wavesurfer.loadBlob(this.toBlob(this.srcBase64));
        }
        else {
            this.wavesurfer.load(this.src);
        }
        this.wavesurfer.on("pause", () => {
            this.playing = false;
        });
        this.wavesurfer.on("finish", () => {
            this.playing = true;
        });
    },
    methods: {
        play() {
            this.wavesurfer.play();
            this.playing = true;
        },
        stop() {
            this.wavesurfer.pause();
        },
        getId(option: WavesurferOptions) {
            return option.container.replace("#", "");
        },
        toBlob(b64: string): Blob {
            const byteCharacters = atob(b64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            return new Blob([byteArray], { type: "audio/wav" });
        },
    },
    components: { PauseButtonIcon, PlayButtonIcon }
});
</script>
<style>
.wave-surfer-player-container {
  width: 100%;
  display: flex;
}
.wave-surfer-play-btn {
  width: 10%;
  display: flex;
  caret-color: rgba(0, 0, 0, 0);
}
.wave-surfer-container {
  width: 80%;
  padding-bottom: 10px;
}
.wave-surfer-icon {
  margin: auto;
  transform: scale(2);
}
.wave-duration-value-container {
  margin: auto;
  width: 10%;
  text-align: center;
  font-weight: 800;
}

.wave-surfer-name-container {
  padding: 5px;
  margin-bottom: -5px;
  font-weight: 600;
}
</style>

<template>
  <div class="wave-surfer-player-container">
    <div class="wave-surfer-play-btn" @click="play" v-show="!playing">
      <PlayButtonIcon class="wave-surfer-icon gg-play-button-o"/>      
    </div>
    <div class="wave-surfer-play-btn" @click="stop" v-show="playing">
      <PauseButtonIcon class="wave-surfer-icon gg-play-pause-o"/>     
    </div>
    <div class="wave-surfer-container">
      <div class="wave-surfer-name-container">{{ effectName }}</div>
      <div :id="getId(options)"></div>
    </div>
    <div class="wave-duration-value-container">{{ durationValue }}</div>
  </div>
</template>
