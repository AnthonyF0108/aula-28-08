import { Video } from "./Video.js";
export declare class Playlist {
    private videos;
    private currentIndex;
    add(video: Video): void;
    remove(id: number): void;
    getCurrent(): Video | null;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): void;
    previous(): void;
    getVideos(): Video[];
    reset(): void;
    setIndex(index: number): void;
    getIndex(): number;
}
//# sourceMappingURL=Playlist.d.ts.map