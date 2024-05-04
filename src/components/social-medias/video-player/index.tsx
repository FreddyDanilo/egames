import { Scan, Star, Trophy } from "lucide-react";
import { BadgeCheck, CirclePlay, Eye, Pause, Rocket } from "lucide-react";
import styles from "./styles.module.css";
import { USERS } from "./api";

export function VideoPlayer() {
  return (
    <div className={styles.area}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.browser}>
            <div className={styles.header}>
              <div className={styles.button}>
                <div style={{ backgroundColor: "#fff" }} />
                <div style={{ backgroundColor: "#ffffff60" }} />
                <div style={{ backgroundColor: "#ffffff20" }} />
              </div>
            </div>

            <div className={styles.body}>
              <div className={styles.channel}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className={styles.channel_name}>CarekaGamer</span>

                  <BadgeCheck size={16} color="#fff" />
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div className={styles.live}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        background: "#fff",
                        borderRadius: "50%",
                      }}
                    />
                    <span>live</span>
                  </div>

                  <div className={styles.views}>
                    <div className={styles.views_icon}>
                      <Eye color="#fff" size={20} />
                    </div>

                    <span>
                      2.754 <span className={styles.views_icon}>viewers</span>
                    </span>
                  </div>
                </div>
              </div>

              <img src="/browser-wallpaper.png" alt="egames" />

              <div className={styles.controllers}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <Pause color="#fff" />

                  <div className={styles.timeline}>
                    <div className={styles.time} />
                  </div>

                  <Scan color="#fff" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.users}>
            {USERS.map((user) => (
              <div className={styles.user} key={user.id}>
                <img src={user.cover} alt={String(user.id)} />
              </div>
            ))}

            <div className={styles.add_user}>+</div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.box}>
            <div className={styles.content}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <Star size={22} color="#fff" />
                <span className={styles.title}>Avaliações</span>
              </div>

              <span className={styles.description}>
                Encontre as melhores avaliações antes de baixar ou comprar um
                novo jogo.
              </span>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.content}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <CirclePlay size={22} color="#fff" />
                <span className={styles.title}>Streamers</span>
              </div>

              <span className={styles.description}>
                Divirta-se com os Streamers parceiros oficiais da eGames.
              </span>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.content}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <Rocket size={22} color="#fff" />
                <span className={styles.title}>Lançamentos</span>
              </div>

              <span className={styles.description}>
                Você por dentro de todas as novidades do mercado antes de todos.
              </span>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.content}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <Trophy size={22} color="#fff" />
                <span className={styles.title}>Campeonatos</span>
              </div>

              <span className={styles.description}>
                Organize e acompanhe os maiores campeonatos em um só lugar.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
