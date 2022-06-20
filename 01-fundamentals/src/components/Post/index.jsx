import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import {
  publishedDateFormatted,
  publishedDateRelativeToNow,
} from "../../utils/utils";

import styles from "./styles.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana, hein ?"]);
  const [newCommentText, setNewCommentText] = useState("");

  const handleCreateNewComment = (event) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  };

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity("");
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(commentsWithoutDeleteOne);
  };

  const handleNewCommentInvalid = (event) => {
    event.target.setCustomValidity("Esse campo é obrigatório.");
  };

  const Paragraph = ({ item }) => <p key={item}>{item.content}</p>;

  const Link = ({ item }) => (
    <p key={item}>
      <a href="#">{item.content}</a>
    </p>
  );

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="Avatar de usuário" />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted(publishedAt)}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow(publishedAt)}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          switch (item.type) {
            case "paragraph":
              return <Paragraph item={item} key={index} />;
            case "link":
              return <Link item={item} key={index} />;
            default:
              null;
          }
        })}

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          required
          placeholder="Deixe um comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
