function ProjetCard({ titre, description, problemes, competences, lien, site }) {
  return (
    <div className="projet-card">
      {site && (
        <div className="iframe-wrapper">
          <iframe
            src={site}
            title={`Preview de ${titre}`}
            width="100%"
            height="220"
            style={{ border: "1px solid #eee", borderRadius: "8px" }}
            loading="lazy"
          ></iframe>
        </div>
      )}
      <h3>{titre}</h3>
      <p><strong>Description :</strong> {description}</p>
      <p><strong>Problématiques :</strong> {problemes}</p>
      <p><strong>Compétences :</strong> {competences}</p>
      <a href={lien} target="_blank" rel="noopener noreferrer">Code GitHub</a>
      {site && (
        <span> | <a href={site} target="_blank" rel="noopener noreferrer">Voir le site</a></span>
      )}
    </div>
  );
}
export default ProjetCard;
