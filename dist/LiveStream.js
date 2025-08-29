import { Video } from "./Video.js";
export class LiveStream extends Video {
    constructor(id, title, author, views, concurrentViewers) {
        super(id, title, 0, author, views);
        this.concurrentViewers = concurrentViewers;
        this.isLive = true;
    }
    play() {
        console.log(`🔴 AO VIVO: ${this.getTitle()} com ${this.concurrentViewers} espectadores simultâneos.`);
    }
    info() {
        return `🔴 Live: ${this.getTitle()} - ${this.concurrentViewers} assistindo agora`;
    }
}
//# sourceMappingURL=LiveStream.js.map