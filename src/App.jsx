import Post from "./components/Post.jsx";

function App() {
  return (
 <main className="App">
<Post />
   <Post author="name1" body="react is useful"/>
   <Post author="name2" body="vite is useful"/>
   <Post />
 </main>
  )
}

export default App;
