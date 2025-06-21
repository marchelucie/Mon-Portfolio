function Formation({ diplome, ecole, annee }) {
  return (
    <div className="formation">
      <strong>{diplome}</strong> – {ecole} <span className="periode">{annee}</span>
    </div>
  );
}
export default Formation;
