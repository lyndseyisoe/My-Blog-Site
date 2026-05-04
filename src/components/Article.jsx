function Article({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <small>{post.date || "No date available"}</small>
      <p>{post.preview}</p>
    </article>
  );
}

export default Article;