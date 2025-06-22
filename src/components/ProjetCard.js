function ProjetCard({ titre, description, problemes, competences, lien, image }) {
  return (
    <div className="projet-card">
      <a href={lien} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt="Booki Project Screenshot"
          className="projet-image"
        ></img>
        <h3>{titre}</h3>
        <p><strong>Description :</strong> {description}</p>
        <p><strong>Problématiques :</strong> {problemes}</p>
        <p><strong>Compétences :</strong> {competences}</p>
      </a>
    </div>
  );
}
export default ProjetCard;
