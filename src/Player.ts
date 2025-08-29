import { Playlist } from "./Playlist";
import { Video } from "./Video";

export class Player {
  private state: "stopped" | "playing" | "paused" = "stopped";
  private loop: boolean = false;
  private shuffle: boolean = false;
  private shuffleOrder: number[] = [];
  private shuffleIndex: number = 0;
  private history: string[] = [];

  constructor(private playlist: Playlist) {}

  public play(): void {
    const current = this.playlist.getCurrent();
    if (current) {
      current.play();
      this.history.push(current.getTitle());
      this.state = "playing";
    }
  }

  public pause(): void {
    const current = this.playlist.getCurrent();
    if (current) {
      current.pause();
      this.state = "paused";
    }
  }

  public stop(): void {
    const current = this.playlist.getCurrent();
    if (current) {
      current.stop();
      this.state = "stopped";
    }
  }

  public next(): void {
    if (this.shuffle) {
      if (this.shuffleIndex < this.shuffleOrder.length - 1) {
        this.shuffleIndex++;
      } else if (this.loop) {
        this.generateShuffleOrder();
        this.shuffleIndex = 0;
      }
      this.playlist.setIndex(this.shuffleOrder[this.shuffleIndex]);
    } else {
      if (this.playlist.hasNext()) {
        this.playlist.next();
      } else if (this.loop) {
        this.playlist.reset();
      }
    }
    this.play();
  }

  public previous(): void {
    if (this.playlist.hasPrevious()) {
      this.playlist.previous();
    }
    this.play();
  }

  public setLoop(on: boolean): void {
    this.loop = on;
    console.log(`🔁 Loop ${on ? "ativado" : "desativado"}`);
  }

  public setShuffle(on: boolean): void {
    this.shuffle = on;
    console.log(`🔀 Shuffle ${on ? "ativado" : "desativado"}`);
    if (on) this.generateShuffleOrder();
  }

  private generateShuffleOrder(): void {
    const videos = this.playlist.getVideos();
    this.shuffleOrder = videos.map((_, i) => i).sort(() => Math.random() - 0.5);
    this.shuffleIndex = 0;
  }

  public getHistory(): string[] {
    return [...this.history];
  }
}
