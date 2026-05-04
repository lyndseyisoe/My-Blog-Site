import blog from "./blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      {/* 1. HEADER FIRST */}
      <Header name={blog.name} />

      {/* 2. ABOUT SECOND */}
      <About about={blog.about} image={blog.image} />

      {/* 3. ARTICLES LAST */}
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;