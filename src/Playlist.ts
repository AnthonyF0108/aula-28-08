import { Video } from "./Video";

export class Playlist {
  private videos: Video[] = [];
  private currentIndex: number = 0;

  public add(video: Video): void {
    this.videos.push(video);
  }

  public remove(id: number): void {
    this.videos = this.videos.filter(v => v.getId() !== id);
  }

  public getCurrent(): Video | null {
    return this.videos[this.currentIndex] || null;
  }

  public hasNext(): boolean {
    return this.currentIndex < this.videos.length - 1;
  }

  public hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  public next(): void {
    if (this.hasNext()) this.currentIndex++;
  }

  public previous(): void {
    if (this.hasPrevious()) this.currentIndex--;
  }

  public getVideos(): Video[] {
    return this.videos;
  }

  public reset(): void {
    this.currentIndex = 0;
  }

  public setIndex(index: number): void {
    if (index >= 0 && index < this.videos.length) {
      this.currentIndex = index;
    }
  }

  public getIndex(): number {
    return this.currentIndex;
  }
}
