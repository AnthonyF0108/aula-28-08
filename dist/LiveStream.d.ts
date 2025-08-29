import { Video } from "./Video.js";
export declare class LiveStream extends Video {
    private concurrentViewers;
    private isLive;
    constructor(id: number, title: string, author: string, views: number, concurrentViewers: number);
    play(): void;
    info(): string;
}
//# sourceMappingURL=LiveStream.d.ts.map