import { useState } from 'react'
import Post from "./components/Post";
import FeedElement from './components/FeedElement';
import ShowPost from './components/ShowPost';
import styles from "./App.module.css";
import Navbar from './components/NavBar';



function App() {

  const [posts, setPosts] = useState([]);
  const [show, setShowPost] = useState(null);

  const addPost = (text) => {
    const newpost = { id: Date.now(), text, like: false};
    setPosts([newpost, ...posts]);
  };
  
  const updatePost = (id, newPost) => {
    const updatedPosts = posts.map((p)=>
      p.id === id ? { ...p, text: newPost} : p
    ); setPosts(updatedPosts);
  }; 
    
  const deletePost = (id) => {
    const deleted = posts.filter((p) => 
      p.id !== id);
    setPosts(deleted); 
  };

  const swapLike = (id) =>  {
    const updatedPost = posts.map((p) =>
      p.id === id ? { ...p, like: !p.like}:p
  ); setPosts(updatedPost);
  }
  
  return (
   <>
    <div className={styles.Navbar}>
      <Navbar />
    </div>

    <div className={styles.container}>

      <div>
        
      </div>
        <Post addPost={addPost} />

        <h1>Your posts</h1>

        <div className={styles.feed}>
          {posts.map((p)=> (
            <FeedElement
              key={p.id}  
              post={p}
              showPost={setShowPost}
              updatePost={updatePost}
              deletePost={deletePost}
              swapLike={swapLike}
            />
          ))}
          </div> 

          <ShowPost post={show} close={()=> setShowPost(null)} />
    </div>
    </>
  )
}

export default App
