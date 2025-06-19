import styles from "./ShowPost.module.css";

function ShowPost({ post, close }) {
  if (!post) return null;

  return (
    <div className={styles.background} onClick={close}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h3>Comments</h3>
        <p className={styles.text}>{post.text}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default ShowPost;