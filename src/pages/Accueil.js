import Experience from "../components/Experience";
import Formation from "../components/Formation";
import SkillButton from "../components/SkillButton";
import Lucie from "../images/Lucie.jpg";

function Accueil() {
    return (
        <section className="accueil">
            <img
                src={Lucie}
                alt="Lucie"
                className="avatar-large"
            />
            <h1>Lucie Marché</h1>
            <p className="intro">
                Développeuse web en reconversion, j’ai à cœur de donner vie à des projets utiles et créatifs.
                Curieuse et attentive, j’aime apprendre, progresser et placer l’humain au centre de mon travail.
                <br />
                <br />
                Si mon univers vous intrigue, n’hésitez pas à me contacter pour échanger ou collaborer !
            </p>
            <div className="infos">
                <div>
                    <h3>Expérience professionnelle</h3>
                    <Experience
                        poste="Gestionnaire de site e-commerce"
                        entreprise="Broderie Diamant France (auto-entreprise)"
                        periode="2022-aujourd'hui"
                        description="Création et gestion d'un site e-commerce via Shopify, optimisation du référencement naturel (SEO), gestion des commandes et de la relation client, développement de compétences en marketing digital."
                    />
                    <Experience
                        poste="Spécialiste Produit"
                        entreprise="Ontex"
                        periode="2023-2024"
                        description="Formation d'équipes soignantes et de directions d'établissements de soins, gestion de la relation client, analyse des besoins, élaboration de solutions adaptées, travail en équipe pluridisciplinaire."
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
                        annee="2025"
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
                <h3>Compétences de développement</h3>
                <ul className="skills-list">
                    <SkillButton skill="HTML/CSS" />
                    <SkillButton skill="JavaScript" />
                    <SkillButton skill="React" />
                    <SkillButton skill="Express" />
                    <SkillButton skill="Node.js" />
                    <SkillButton skill="Git & GitHub" />
                </ul>
                <h3>Compétences transversales</h3>
                <ul className="skills-list">
                    <SkillButton skill="Agilité" />
                    <SkillButton skill="Gestion de projet" />
                    <SkillButton skill="Communication" />
                    <SkillButton skill="Travail en équipe" />
                    <SkillButton skill="Autonomie" />
                    <SkillButton skill="Analyse des besoins" />
                    <SkillButton skill="Résolution de problèmes" />
                </ul>
            </div>
        </section>
    );
}

export default Accueil;
