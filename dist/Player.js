export class Player {
    constructor(playlist) {
        this.playlist = playlist;
        this.state = "stopped";
        this.loop = false;
        this.shuffle = false;
        this.shuffleOrder = [];
        this.shuffleIndex = 0;
        this.history = [];
    }
    play() {
        const current = this.playlist.getCurrent();
        if (current) {
            current.play();
            this.history.push(current.getTitle());
            this.state = "playing";
        }
    }
    pause() {
        const current = this.playlist.getCurrent();
        if (current) {
            current.pause();
            this.state = "paused";
        }
    }
    stop() {
        const current = this.playlist.getCurrent();
        if (current) {
            current.stop();
            this.state = "stopped";
        }
    }
    next() {
        if (this.shuffle) {
            if (this.shuffleIndex < this.shuffleOrder.length - 1) {
                this.shuffleIndex++;
            }
            else if (this.loop) {
                this.generateShuffleOrder();
                this.shuffleIndex = 0;
            }
            this.playlist.setIndex(this.shuffleOrder[this.shuffleIndex]);
        }
        else {
            if (this.playlist.hasNext()) {
                this.playlist.next();
            }
            else if (this.loop) {
                this.playlist.reset();
            }
        }
        this.play();
    }
    previous() {
        if (this.playlist.hasPrevious()) {
            this.playlist.previous();
        }
        this.play();
    }
    setLoop(on) {
        this.loop = on;
        console.log(`🔁 Loop ${on ? "ativado" : "desativado"}`);
    }
    setShuffle(on) {
        this.shuffle = on;
        console.log(`🔀 Shuffle ${on ? "ativado" : "desativado"}`);
        if (on)
            this.generateShuffleOrder();
    }
    generateShuffleOrder() {
        const videos = this.playlist.getVideos();
        this.shuffleOrder = videos.map((_, i) => i).sort(() => Math.random() - 0.5);
        this.shuffleIndex = 0;
    }
    getHistory() {
        return [...this.history];
    }
}
//# sourceMappingURL=Player.js.map