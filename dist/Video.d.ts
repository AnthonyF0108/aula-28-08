export interface Playable {
    play(): void;
    pause(): void;
    stop(): void;
}
export interface Describable {
    info(): string;
}
export declare class Video implements Playable, Describable {
    private id;
    private title;
    private duration;
    private author;
    private views;
    private currentTime;
    constructor(id: number, title: string, duration: number, author: string, views: number);
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
    getId(): number;
    getTitle(): string;
}
//# sourceMappingURL=Video.d.ts.map