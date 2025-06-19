import { useState } from "react";
import styles from "./Post.module.css";

function Post ({addPost}) {
    const [text, setText] = useState("");
    const sendPost = (e) => {
        e.preventDefault();
        if (text.trim()=== "") return;
        addPost(text);
        setText("");
    };

    return (
        <form className={styles.form} onSubmit={sendPost}>
            <input 
            className={styles.entry} 
            placeholder="Share your thoughts"
            value={text}
            onChange={(e) => setText(e.target.value)}/>

            <button className={styles.postButton} type="submit">
                Rave!
            </button>
        </form>
    )
}

export default Post;