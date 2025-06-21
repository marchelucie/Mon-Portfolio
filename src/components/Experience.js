function Experience({ poste, entreprise, periode, description }) {
  return (
    <div className="experience">
      <h4>{poste} – {entreprise}</h4>
      <span className="periode">{periode}</span>
      <p>{description}</p>
    </div>
  );
}
export default Experience;
