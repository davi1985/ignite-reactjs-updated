import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((prevState) => prevState + 1);
  };

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const totalLikeCount = likeCount > 0 ? likeCount : "Nenhum";

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/davi1985.png"
        alt="Avatar do usuário"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Davi Silva</strong>

              <time title="07 de Junho de 2022" dateTime="2022-06-07 08:02:33">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar cometário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir
            <span>{totalLikeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
