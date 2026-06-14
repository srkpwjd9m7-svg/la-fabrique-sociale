import './App.css'

const site = {
  name: 'La fabrique sociale',
  tagline: 'Écouter, comprendre, construire ensemble',
  phone: '06 00 00 00 00',
  email: 'contact@lafabriquesociale.fr',
  location: 'Accompagnement en présentiel et à distance',
}

const services = [
  {
    title: 'Acces aux droits',
    text: 'Aide pour comprendre les dispositifs, constituer les dossiers et faire avancer les demandes qui restent bloquées.',
  },
  {
    title: 'Soutien administratif',
    text: 'Tri des documents, rédaction de courriers, médiation avec les organismes et suivi des démarches importantes.',
  },
  {
    title: 'Budget et quotidien',
    text: 'Accompagnement pour retrouver de la clarté, prioriser les urgences et poser des solutions concrètes et réalistes.',
  },
  {
    title: 'Famille et parcours de vie',
    text: 'Écoute, orientation et coordination autour des situations familiales, de la santé, du logement ou d un changement de vie.',
  },
]

const steps = [
  {
    phase: '01',
    title: 'Premier échange',
    text: 'Un temps de contact pour comprendre votre situation, vos priorités et ce qui vous bloque aujourd hui.',
  },
  {
    phase: '02',
    title: 'Plan d accompagnement',
    text: 'Nous construisons ensemble une méthode claire avec des objectifs simples, un calendrier et les démarches utiles.',
  },
  {
    phase: '03',
    title: 'Suivi sur mesure',
    text: 'Je vous accompagne dans la durée avec des points réguliers, de l adaptation et une présence humaine fiable.',
  },
]

const strengths = [
  'Écoute active et bienveillance',
  'Confidentialité et cadre rassurant',
  'Approche concrète, pas à pas',
  'Coordination avec les acteurs utiles',
]

function App() {
  const logoBoard = `${import.meta.env.BASE_URL}brand/logo-board.jpg`

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#accueil">
          <span className="brand-mark">LF</span>
          <span>
            <strong>{site.name}</strong>
            <small>{site.tagline}</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Navigation principale">
          <a href="#services">Accompagnement</a>
          <a href="#methode">Méthode</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="accueil">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Assistante sociale indépendante</p>
            <h1>Un accompagnement social humain, lisible et construit avec vous.</h1>
            <p className="intro">
              {site.name} accompagne les personnes, les familles et les proches
              aidants avec une approche douce, concrète et personnalisée pour
              retrouver des solutions quand le parcours devient trop lourd à
              porter seul.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Prendre contact
              </a>
              <a className="button button-secondary" href="#services">
                Découvrir l accompagnement
              </a>
            </div>

            <ul className="hero-points" aria-label="Engagements">
              <li>Écoute sans jugement</li>
              <li>Confidentialité</li>
              <li>Suivi sur mesure</li>
            </ul>
          </div>

          <aside className="hero-card" aria-label="Identite visuelle">
            <div className="hero-card-frame">
              <img
                src={logoBoard}
                alt="Identité visuelle de La fabrique sociale"
              />
            </div>
            <div className="hero-card-text">
              <p>Une identité douce et rassurante</p>
              <strong>Écouter. Comprendre. Construire ensemble.</strong>
            </div>
          </aside>
        </section>

        <section className="stats-band" aria-label="Valeurs clés">
          <article>
            <strong>Sur mesure</strong>
            <span>Chaque situation demande un rythme et des solutions adaptées.</span>
          </article>
          <article>
            <strong>Clarté</strong>
            <span>Des explications simples pour comprendre les droits et les étapes.</span>
          </article>
          <article>
            <strong>Lien humain</strong>
            <span>Une relation de confiance pour ne pas traverser les démarches seul.</span>
          </article>
        </section>

        <section className="section-grid" id="services">
          <div className="section-heading">
            <p className="eyebrow">Domaines d intervention</p>
            <h2>Des appuis concrets pour les moments qui demandent plus qu un simple conseil.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-block" id="methode">
          <div className="story-copy">
            <p className="eyebrow">Parcours d accompagnement</p>
            <h2>Une méthode simple pour redonner de l air et remettre les choses en mouvement.</h2>
            <p>
              L objectif n est pas d ajouter une couche administrative, mais de
              vous aider à retrouver de la lisibilité, des priorités claires et
              des actions réalisables.
            </p>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <article className="step-card" key={step.phase}>
                <span>{step.phase}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="apropos">
          <div className="about-card">
            <p className="eyebrow">À propos</p>
            <h2>Une présence professionnelle pour accompagner sans brusquer.</h2>
            <p>
              Ce site a été pensé comme une vitrine apaisante, claire et
              accessible. Il peut ensuite être complété avec votre parcours,
              vos publics, vos modalités d intervention et vos témoignages.
            </p>
          </div>

          <div className="strengths-card">
            <h3>Ce que le site met déjà en valeur</h3>
            <ul>
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Prendre contact</p>
            <h2>Un premier échange peut suffire à clarifier la suite.</h2>
            <p>
              Les coordonnées ci-dessous sont modifiables facilement. J ai mis
              des valeurs de départ pour que le site soit présentable tout de
              suite dans le dépôt.
            </p>
          </div>

          <div className="contact-panel">
            <a href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.location}</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
