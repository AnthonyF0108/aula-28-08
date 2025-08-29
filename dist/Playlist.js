export class Playlist {
    constructor() {
        this.videos = [];
        this.currentIndex = 0;
    }
    add(video) {
        this.videos.push(video);
    }
    remove(id) {
        this.videos = this.videos.filter(v => v.getId() !== id);
    }
    getCurrent() {
        return this.videos[this.currentIndex] || null;
    }
    hasNext() {
        return this.currentIndex < this.videos.length - 1;
    }
    hasPrevious() {
        return this.currentIndex > 0;
    }
    next() {
        if (this.hasNext())
            this.currentIndex++;
    }
    previous() {
        if (this.hasPrevious())
            this.currentIndex--;
    }
    getVideos() {
        return this.videos;
    }
    reset() {
        this.currentIndex = 0;
    }
    setIndex(index) {
        if (index >= 0 && index < this.videos.length) {
            this.currentIndex = index;
        }
    }
    getIndex() {
        return this.currentIndex;
    }
}
//# sourceMappingURL=Playlist.js.map