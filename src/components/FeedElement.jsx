import { useEffect, useState, useRef } from "react";
import styles from "./FeedElement.module.css";
import starOn from "../assets/starOn.png";
import staroff from "../assets/staroff.png";  
import ProfilePicture from "../assets/ProfilePicture.jpg"; 


function FeedElement({
    post,
    updatePost,
    showPost,
    deletePost,
    swapLike,
    
}){
    const [editMode, setEditMode] = useState(false);
    const [newPost, setNewPost] = useState(post.newPost);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef =useRef(null);
    useEffect(() => {
      function handleClickOutside(event){
        if(menuRef.current && !menuRef.current.contains(event.target)){
          setMenuOpen(false);
        }
      }
      if (menuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuOpen]);


    const saveChange = () => {
        if (newPost.trim() === "") 
          return;
        updatePost(post.id, newPost);
        setEditMode(false);
    };
    const [star, setStar] = useState(false);
      const swapStar = () => {
      setStar((prev) => !prev);
    };
    
   
    return (
        <div className={styles.post}>

          

          

          <div className={styles.actions}>
            <span className={styles.likeButton} onClick={() => swapLike(post.id)}> 
                 {post.like ? "❤️" : "🤍"}  
            </span>
            <span className={styles.starButton} onClick={swapStar}
                 aria-label={star ? "Remove from favorites" : "Add to favorites"}
                 type="button">
            <img
            src={star ? starOn : staroff}
            alt={star ? "Starred" : "Unstarred"}
            className={styles.starIcon}
            />   
            </span>
          </div>  
        
        <div className={styles.menuWrapper}>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="More options">
              ⋮
          </button>
          
        </div>
        {editMode ? (
            <>
            <input className={styles.entry}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            />
            <button className= {styles.buttonSub} onClick={saveChange}> 
            Submit change

            </button>
            </>
        ):(
          
            <>
            <p className={styles.text}> {post.text}</p>
            <div ref={menuRef} >
              
            
            {menuOpen && ( 
              <div className={styles.dropdownMenu}>
                
                <button
                className={styles.button}
                onClick={()=> showPost(post) }
                > Show
                </button>
                <button
                  className={styles.button}
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </button>
                <button
                  className={styles.button}
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
            </div>
            )}
            </div>
            </>
        )}
        </div>
        );
    
}

export default FeedElement;