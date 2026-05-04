function Article({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <small>{post.date}</small>
      <p>{post.preview}</p>
    </div>
  );
}

export default Article;