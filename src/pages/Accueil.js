import Experience from "../components/Experience";
import Formation from "../components/Formation";
import SkillButton from "../components/SkillButton";

function Accueil() {
    return (
        <section className="accueil">
            <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Lucie"
                className="avatar-large"
            />
            <h1>Lucie Marché</h1>
            <p className="intro">Développeuse web en reconversion, </p>
            <div className="infos">
                <div>
                    <h3>Expériences</h3>
                    <Experience
                        poste="Etudiante Développeuse web"
                        entreprise="OpenClassrooms"
                        periode="2025"
                        description="Création de plusieurs projets web, apprentissage du travail en agilité, gestion du versioning sur GitHub."
                    />
                    <Experience
                        poste="Spécialiste Produit"
                        entreprise="Ontex"
                        periode="2023-2024"
                        description="Formation d'équipes soignantes et de directions d'établissements de soins, gestion de la relation client, analyse des besoins, élaboration de solutions adaptées, travail en équipe pluridisciplinaire."
                    />
                    <Experience
                        poste="Gestionnaire de site e-commerce"
                        entreprise="Broderie Diamant France (auto-entreprise)"
                        periode="2022-2024"
                        description="Création et gestion d'un site e-commerce via Shopify, optimisation du référencement naturel (SEO), gestion des commandes et de la relation client, développement de compétences en marketing digital."
                    />
                    <Experience
                        poste="Infirmière"
                        entreprise="Laboratoires, EHPAD, Hôpitaux et Cliniques"
                        periode="2017-2023"
                        description="Expérience en soins infirmiers, gestion de situations d'urgence, travail en équipe pluridisciplinaire, écoute et empathie envers les patients."
                    />
                </div>
                <div>
                    <h3>Formations</h3>
                    <Formation
                        diplome="Développeuse Web"
                        ecole="OpenClassrooms"
                        annee="2024-2025"
                    />
                    <Formation
                        diplome="Diplôme d'Etat Infirmier"
                        ecole="IFPS de Chambray-lès-Tours"
                        annee="2014-2017"
                    />
                    <Formation
                        diplome="Baccalauréat Scientifique"
                        ecole="Lycée Jean Monnet, Joué-lès-Tours"
                        annee="2010-2013"
                    />
                </div>
            </div>
            <div>
                <h3>Compétences</h3>
                <ul className="skills-list">
                    <SkillButton skill="HTML" />
                    <SkillButton skill="CSS" />
                    <SkillButton skill="JavaScript" />
                    <SkillButton skill="React" />
                    <SkillButton skill="Git" />
                    <SkillButton skill="GitHub" />
                    <SkillButton skill="Responsive Design" />
                    <SkillButton skill="Travail en équipe" />
                </ul>
            </div>
        </section>
    );
}

export default Accueil;
