function APropos() {
  return (
    <section>
      <h2>À propos de moi</h2>
      <div className="apropos-section">
        <div>
          <h4>Langues parlées</h4>
          <ul>
            <li>Français (natif)</li>
            <li>Anglais (intermédiaire)</li>
            {/* Ajoute d'autres langues */}
          </ul>
        </div>
        <div>
          <h4>Hobbies & passions</h4>
          <ul>
            <li>Dessin, DIY, couture</li>
            <li>Randonnée, nature</li>
            <li>Cinéma, jeux vidéo</li>
            {/* Ajoute d'autres hobbies */}
          </ul>
        </div>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Email : <a href="mailto:lucie.pouponneau@gmail.com">lucie.pouponneau@gmail.com</a></p>
        <p>
          <a href="https://github.com/lucie-pouponneau" target="_blank" rel="noopener noreferrer">Mon GitHub</a>
        </p>
        {/* Ajoute LinkedIn ou autre si tu veux */}
      </div>
    </section>
  );
}
export default APropos;
