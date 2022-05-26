interface WavesurferOptions {
    container: string;
    waveColor: string;
    progressColor: string;
    backgroundColor: string;
    cursorColor: string;
    cursorWidth: number;
    autoCenter: boolean;
    normalize: boolean;
    scrollParent: boolean;
    backend: string;
    responsive: any;
    maxCanvasWidth: number;
    hideScrollbar: boolean;
    height: number;
    closeAudioContext: boolean;
    audioRate: number;
    audioContext: object;
    audioScriptProcessor: object;
    barGap: number;
    barHeight: number;
    barMinHeight: number;
    barRadius: number;
    barWidth: number;
    drawingContextAttributes: object;
    fillParent: boolean;
    forceDecode: boolean;
    hideCursor: boolean;
    interact: boolean;
    loopSelection: boolean;
    mediaControls: boolean;
    mediaType: string;
    minPxPerSec: number;
    partialRender: boolean;
    pixelRatio: number;
    plugins: Array<any>;
    regionsMinLength: number;
    removeMediaElementOnDestroy: boolean;
    renderer: object;
    skipLength: number;
    splitChannels: boolean;
    splitChannelsOptions: object;
    xhr: object;
}

export { WavesurferOptions }