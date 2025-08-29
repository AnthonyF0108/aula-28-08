import { Video } from "./Video.js";
import { AdVideo } from "./AdVideo.js";
import { LiveStream } from "./LiveStream.js";
import { Playlist } from "./Playlist.js";
import { Player } from "./Player.js";
const v1 = new Video(1, "Aula TypeScript", 300, "Professor X", 1000);
const v2 = new AdVideo(2, "Anúncio Nike", 30, "Nike", 5000, "Nike", 5);
const v3 = new Video(3, "Documentário", 600, "Discovery", 2000);
const v4 = new LiveStream(4, "Live Coding", "Dev Y", 300, 120);
const playlist = new Playlist();
playlist.add(v1);
playlist.add(v2);
playlist.add(v3);
playlist.add(v4);
const player = new Player(playlist);
console.log("\n--- Simulação Player ---\n");
player.play(); // toca primeiro vídeo
player.next(); // vai para o anúncio
player.next(); // vai para documentário
player.setShuffle(true);
player.next(); // toca aleatório
player.setLoop(true);
player.next(); // continua loopando
console.log("Histórico:", player.getHistory());
//# sourceMappingURL=main.js.map