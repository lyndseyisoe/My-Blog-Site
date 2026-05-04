function About({ about, image }) {
  return (
    <div>
      <img src={image} alt="blog" style={{ width: "150px" }} />
      <p>{about}</p>
    </div>
  );
}

export default About;