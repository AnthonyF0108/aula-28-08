;
;
export class Video {
    constructor(id, title, duration, author, views) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.author = author;
        this.views = views;
        this.currentTime = 0;
    }
    play() {
        console.log(`▶️ Reproduzindo vídeo: ${this.title}`);
    }
    pause() {
        console.log(`⏸️ Pausado: ${this.title}`);
    }
    stop() {
        this.currentTime = 0;
        console.log(`⏹️ Parado: ${this.title}`);
    }
    info() {
        return `🎬 [${this.id}] ${this.title} - ${this.duration}s - Autor: ${this.author} - Views: ${this.views}`;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
}
//# sourceMappingURL=Video.js.map