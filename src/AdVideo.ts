import { Video } from "./Video";

export class AdVideo extends Video {
  constructor(
    id: number,
    title: string,
    duration: number,
    author: string,
    views: number,
    private advertiser: string,
    private skippableAfter: number
  ) {
    super(id, title, duration, author, views);
  }

  public play(): void {
    console.log(`📢 Anúncio de ${this.advertiser}. Pode pular após ${this.skippableAfter}s.`);
  }
}
