function About({ about, image = "https://via.placeholder.com/150" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" style={{ width: "150px" }} />
      <p>{about}</p>
    </aside>
  );
}

export default About;