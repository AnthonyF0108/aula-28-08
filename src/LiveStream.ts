import { Video } from "./Video";

export class LiveStream extends Video {
  private isLive: boolean = true;

  constructor(
    id: number,
    title: string,
    author: string,
    views: number,
    private concurrentViewers: number
  ) {
    super(id, title, 0, author, views);
  }

  public play(): void {
    console.log(`🔴 AO VIVO: ${this.getTitle()} com ${this.concurrentViewers} espectadores simultâneos.`);
  }

  public info(): string {
    return `🔴 Live: ${this.getTitle()} - ${this.concurrentViewers} assistindo agora`;
  }
}
