import ProjetCard from "../components/ProjetCard";
import BookiImage from "../images/Booki-image.png";
import NinaImage from "../images/NinaCarducci-image.png";
import SophieImage from "../images/SophieBluel-image.png";
import KasaImage from "../images/Kasa-image.png";
import VieuxGrimoireImage from "../images/VieuxGrimoire-image.png";

function Projets() {
    return (
        <section>
            <h2>Mes projets</h2>
            <p>Voici quelques-uns de mes projets réalisés durant ma formation. Ils illustrent mes compétences en développement web, ainsi que ma capacité à résoudre des problèmes techniques et à travailler avec différentes technologies.
            <br />
            <br />
            Vous pouvez accéder aux repo GitHub en cliquant sur les cartes !</p>
            <div className="projets-list">
                <ProjetCard
                    titre="Booki"
                    description="Site de réservation d’hébergements de vacances."
                    problemes="Première intégration responsive, gestion des grilles CSS. J'ai surmonté les difficultés en pratiquant et en relisant la doc CSS Grid/Flexbox."
                    competences="HTML, CSS, Responsive design"
                    lien="https://github.com/marchelucie/Booki"
                    image={BookiImage}
                />
                <ProjetCard
                    titre="Sophie Bluel, architecte d'intérieur"
                    description="Portfolio de Sophie Bluel, architect d'intérieur."
                    problemes="Création d'un site vitrine avec une galerie d'images responsive et dynamique, avec une fonctionnalité d'authentification et des appels API."
                    competences="HTML, CSS, JavaScript, Responsive design"
                    lien="https://github.com/marchelucie/Projet-Sophie-Bluel"
                    image={SophieImage}
                />
                <ProjetCard
                    titre="Nina Carducci, photographe"
                    description="Portfolio de Nina Carducci, photographe professionnelle."
                    problemes="Debuggage du site, optimisation de la performance et de l'accessibilité."
                    competences="Référencement SEO, accessibilité avec WAVE, optimisation des performances avec Lighthouse"
                    lien="https://github.com/marchelucie/Nina-Carducci"
                    image={NinaImage}
                />
                <ProjetCard
                    titre="Kasa"
                    description="Application web de location immobilière."
                    problemes="Création d'une application web React navigable, avec des composants réutilisables, une gestion de l'état, et des animation CSS."
                    competences="React, SCSS, Responsive design"
                    lien="https://github.com/marchelucie/Kasa"
                    image={KasaImage}
                />
                <ProjetCard
                    titre="Mon Vieux Grimoire"
                    description="Site de notation et partage de livres."
                    problemes="Développement du back-end du site avec création d'API RESTful et opérations CRUD, gestion de base de données, authentification, ainsi que la sécurisation des routes."
                    competences="Express, Node.js, MongoDB"
                    lien="https://github.com/marchelucie/Mon-Vieux-Grimoire"
                    image={VieuxGrimoireImage}
                />
            </div>
        </section>
    );
}

export default Projets;
