import { App } from "vue";
import { Wavesurfer } from "./components";

export default {
    install: (app: App) => {
        app.component("Wavesurfer", Wavesurfer)
    }
};

export { Wavesurfer };