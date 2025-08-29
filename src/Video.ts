export interface Playable {
  play(): void;
  pause(): void;
  stop(): void;
};

export interface Describable {
  info(): string;
};

export class Video implements Playable, Describable {
  private currentTime: number = 0;

  constructor(
    private id: number,
    private title: string,
    private duration: number,
    private author: string,
    private views: number
  ) {}

  public play(): void {
    console.log(`▶️ Reproduzindo vídeo: ${this.title}`);
  }

  public pause(): void {
    console.log(`⏸️ Pausado: ${this.title}`);
  }

  public stop(): void {
    this.currentTime = 0;
    console.log(`⏹️ Parado: ${this.title}`);
  }

  public info(): string {
    return `🎬 [${this.id}] ${this.title} - ${this.duration}s - Autor: ${this.author} - Views: ${this.views}`;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }
}
