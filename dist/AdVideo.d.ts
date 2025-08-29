import { Video } from "./Video.js";
export declare class AdVideo extends Video {
    private advertiser;
    private skippableAfter;
    constructor(id: number, title: string, duration: number, author: string, views: number, advertiser: string, skippableAfter: number);
    play(): void;
}
//# sourceMappingURL=AdVideo.d.ts.map