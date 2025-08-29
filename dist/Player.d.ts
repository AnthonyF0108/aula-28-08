import { Playlist } from "./Playlist.js";
export declare class Player {
    private playlist;
    private state;
    private loop;
    private shuffle;
    private shuffleOrder;
    private shuffleIndex;
    private history;
    constructor(playlist: Playlist);
    play(): void;
    pause(): void;
    stop(): void;
    next(): void;
    previous(): void;
    setLoop(on: boolean): void;
    setShuffle(on: boolean): void;
    private generateShuffleOrder;
    getHistory(): string[];
}
//# sourceMappingURL=Player.d.ts.map