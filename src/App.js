import React from 'react';
import './App.css';
import Post from './Post'  // imports Post component

function App() {
  const [posts, setPosts] = React.useState([
    {
      username: "Ryan",
      caption: "Wow, it works", 
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "Les",
      caption: "Look at that",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "Connor",
      caption: "Neat",
      iamgeUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
    }
  ]);


  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""></img>
      </div>
      <p>Hellow React World!</p>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }


    </div>
  );
}

export default App;
