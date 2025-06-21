import ProjetCard from "../components/ProjetCard";

function Projets() {
    return (
        <section>
            <h2>Mes projets</h2>
            <div className="projets-list">
                <ProjetCard
                    titre="Booki"
                    description="Site de réservation d’hébergements et d’activités."
                    problemes="Première intégration responsive, gestion des grilles CSS. J'ai surmonté les difficultés en pratiquant et en relisant la doc CSS Grid/Flexbox."
                    competences="HTML, CSS, Responsive design"
                    lien="https://github.com/marchelucie/Booki"
                    site="https://marchelucie.github.io/Booki/"
                />
            </div>
        </section>
    );
}

export default Projets;
