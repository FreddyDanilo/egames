import { Gamepad2, Share2, UsersRound } from "lucide-react";
import styles from "./styles.module.css";
import { VideoPlayer } from "./video-player";
import { Cards } from "./cards";
import { Community } from "./community";

export function SocialMedias() {
  return (
    <div className={styles.area} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.cover}>
            <img
              src="/social-media/social-media-wallpaper.png"
              alt="egames"
              style={{ animationName: "a-02" }}
              className={styles.animation}
            />

            <img
              src="/social-media/icon-00.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: 60,
                height: 60,
                left: "82%",
                top: "50%",
                animationName: "a-00",
              }}
            />

            <img
              src="/social-media/icon-01.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: "45%",
                height: "20%",
                left: "-5%",
                top: "20%",
                animationName: "a-01",
              }}
            />

            <img
              src="/social-media/icon-02.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: 32,
                height: 32,
                left: "52%",
                top: "5%",
                animationName: "a-00",
                animationDelay: "0.5s",
              }}
            />

            <img
              src="/social-media/icon-03.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: 44,
                height: 44,
                left: "9%",
                top: "60%",
                animationName: "a-00",
                animationDelay: "1s",
              }}
            />
          </div>

          <div className={styles.details}>
            <Share2 size={36} color="#fff" />

            <h2>Uma rede social completa só de gamers</h2>

            <span>
              Uma experiência 100% voltada para jogos. Aqui você pode postar
              sobre suas partidas, acompanhar seu streamer favorito e muito
              mais.
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.details}>
            <UsersRound size={36} color="#fff" />

            <h2>Faça amigos para sua próxima partida</h2>

            <span>
              Converse com seus amigos através de mensagens privadas ou até
              mesmo em grupos de até 200 pessoas.
            </span>
          </div>

          <div className={styles.cover}>
            <img
              src="/social-media/message-01.png"
              alt="egames"
              style={{ animationName: "a-03" }}
              className={styles.animation}
            />

            <img
              src="/social-media/message-00.png"
              alt="egames"
              className={styles.icon}
              style={{
                width: "90%",
                height: "40%",
                left: "-10%",
                top: "45%",
                animationName: "a-01",
                animationDelay: "1s",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.details} style={{ placeItems: "center" }}>
          <Gamepad2 size={36} color="#fff" />

          <h2 style={{ maxWidth: 742, textAlign: "center" }}>
            Você por dentro de tudo o que acontece com seu jogo favorito
          </h2>

          <VideoPlayer />

          <Cards />

          <Community />
        </div>
      </div>
    </div>
  );
}
