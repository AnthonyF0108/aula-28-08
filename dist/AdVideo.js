import { Video } from "./Video.js";
export class AdVideo extends Video {
    constructor(id, title, duration, author, views, advertiser, skippableAfter) {
        super(id, title, duration, author, views);
        this.advertiser = advertiser;
        this.skippableAfter = skippableAfter;
    }
    play() {
        console.log(`📢 Anúncio de ${this.advertiser}. Pode pular após ${this.skippableAfter}s.`);
    }
}
//# sourceMappingURL=AdVideo.js.map