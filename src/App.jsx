import './App.css'

const site = {
  name: 'La fabrique sociale',
  tagline: 'Écouter, comprendre, construire ensemble',
  phone: '06 00 00 00 00',
  email: 'contact@lafabriquesociale.fr',
  location: 'Accompagnement en présentiel et à distance',
}

const domains = [
  {
    title: 'Le budget',
    text: 'Gestion budgétaire, demandes d aides financières, prévention du surendettement et reprise de visibilité sur les priorités du quotidien.',
  },
  {
    title: 'La famille',
    text: 'Soutien à la parentalité, situations de tension familiale, accompagnement d un proche et coordination autour des besoins du foyer.',
  },
  {
    title: 'Le handicap',
    text: 'Dossiers MDPH, reconnaissance du handicap, accès aux aides humaines, matérielles ou financières et maintien dans l emploi.',
  },
  {
    title: 'L insertion sociale ou professionnelle',
    text: 'Reprise de parcours, maintien dans l emploi, recherche de logement, mobilisation des droits et des bons interlocuteurs.',
  },
  {
    title: 'La retraite',
    text: 'Lecture du relevé de carrière, préparation du départ, demandes administratives et vérification des droits ouverts.',
  },
  {
    title: 'La santé',
    text: 'Arrêt de travail, invalidité, dossiers complexes, lien avec les organismes et accompagnement de la personne malade ou de ses proches.',
  },
]

const steps = [
  {
    phase: 'Phase 1',
    title: 'Échange téléphonique',
    text: 'Un premier échange gratuit pour comprendre votre situation, identifier les urgences et voir comment je peux vous accompagner.',
  },
  {
    phase: 'Phase 2',
    title: 'Rendez-vous et stratégie',
    text: 'Nous faisons le point ensemble sur les droits, les démarches à engager et les actions prioritaires à mettre en place.',
  },
  {
    phase: 'Phase 3',
    title: 'Administratif et suivi',
    text: 'Analyse des documents, rédaction, coordination avec les organismes et accompagnement dans la durée si nécessaire.',
  },
]

const offers = [
  {
    name: 'Échange téléphonique',
    price: 'Offert',
    text: 'Premier contact pour analyser le besoin, répondre à vos questions et orienter vers la formule adaptée.',
  },
  {
    name: 'Accompagnement individuel',
    price: 'À partir de 60 €',
    text: 'Rendez-vous en présentiel ou à distance, analyse de la situation et travail administratif hors rendez-vous.',
  },
  {
    name: 'Accompagnement renforcé',
    price: 'À partir de 130 €',
    text: 'Pour les situations demandant davantage de coordination, de suivi et de temps de traitement.',
  },
]

const experience = [
  'L enfance et l adolescence',
  'Le service social de proximité',
  'La protection internationale',
  'Le service social d entreprise',
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
          <a href="#apropos">À propos</a>
          <a href="#domaines">Domaines d intervention</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#contact">Prendre contact</a>
        </nav>
      </header>

      <main id="accueil">
        <section className="hero hero-socialli">
          <div className="hero-copy">
            <p className="eyebrow">Accompagnement social personnalisé et confidentiel</p>
            <h1>{site.name}, une aide concrète et humaine quand le système bloque.</h1>
            <p className="intro">
              Je vous aide à débloquer vos démarches administratives, à
              comprendre vos droits et à avancer avec un accompagnement
              structuré, bienveillant et sur mesure.
            </p>

            <ul className="hero-checklist" aria-label="Aides proposées">
              <li>Débloquer vos démarches administratives</li>
              <li>Comprendre et faire valoir vos droits</li>
              <li>Avancer de façon concrète et rassurante</li>
            </ul>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Prendre contact
              </a>
              <a className="button button-secondary" href="#domaines">
                En savoir plus
              </a>
            </div>
          </div>

          <aside className="hero-side">
            <div className="hero-identity-card">
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
            </div>

            <div className="contact-badge">
              <p>Diagnostic gratuit</p>
              <a href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a>
              <span>Du lundi au vendredi, sur rendez-vous</span>
            </div>
          </aside>
        </section>

        <section className="section-grid" id="domaines">
          <div className="section-heading">
            <p className="eyebrow">Domaines d intervention</p>
            <h2>Une approche humaine, un accompagnement sur mesure.</h2>
          </div>

          <div className="domain-grid">
            {domains.map((domain) => (
              <article className="domain-card" key={domain.title}>
                <h3>{domain.title}</h3>
                <p>{domain.text}</p>
                <a href="#contact">En savoir plus</a>
              </article>
            ))}
          </div>
        </section>

        <section className="story-block" id="methode">
          <div className="story-copy">
            <p className="eyebrow">Parcours d accompagnement</p>
            <h2>Étapes clés du suivi</h2>
            <p>
              Le suivi s organise de manière simple, claire et rassurante, pour
              que chaque étape ait du sens et réponde à votre situation.
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
          <div className="about-card about-rich">
            <p className="eyebrow">À propos de moi</p>
            <h2>Une expérience riche et diversifiée au service d un accompagnement personnalisé.</h2>
            <p>
              Avec plusieurs années d expérience dans l accompagnement social,
              j ai exercé dans différents environnements pour développer une
              approche souple, humaine et adaptée aux réalités de chacun.
            </p>

            <ul className="experience-list">
              {experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Mon objectif est d offrir un cadre de confiance pour clarifier la
              situation, mobiliser les bons leviers et avancer sans vous laisser
              seul face à la complexité administrative.
            </p>
          </div>

          <div className="strengths-card">
            <h3>Pourquoi faire appel à une assistante sociale indépendante ?</h3>
            <ul>
              <li>Un accompagnement libre, indépendant et confidentiel</li>
              <li>Une relation de confiance construite à votre rythme</li>
              <li>Des conseils concrets adaptés à votre réalité</li>
              <li>Une co-construction des démarches et du plan d aide</li>
            </ul>
          </div>
        </section>

        <section className="pricing-section" id="tarifs">
          <div className="section-heading">
            <p className="eyebrow">Tarifs</p>
            <h2>Des formules lisibles selon le niveau d accompagnement nécessaire.</h2>
          </div>

          <div className="pricing-grid">
            {offers.map((offer) => (
              <article className="pricing-card" key={offer.name}>
                <h3>{offer.name}</h3>
                <strong>{offer.price}</strong>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Prendre contact</p>
            <h2>Un premier échange peut déjà vous aider à y voir plus clair.</h2>
            <p>
              Vous pouvez me joindre par téléphone, par email, ou utiliser le
              formulaire ci dessous pour expliquer brièvement votre besoin.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-panel">
              <p className="contact-label">Localisation</p>
              <p>{site.location}</p>
              <p className="contact-label">M écrire</p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p className="contact-label">M appeler</p>
              <a href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a>
            </div>

            <form className="contact-form">
              <label>
                Nom
                <input type="text" name="lastname" placeholder="Votre nom" />
              </label>
              <label>
                Prénom
                <input type="text" name="firstname" placeholder="Votre prénom" />
              </label>
              <label>
                Téléphone
                <input type="tel" name="phone" placeholder="06 00 00 00 00" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="vous@email.fr" />
              </label>
              <label className="full-width">
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Décrivez brièvement votre situation ou votre besoin."
                />
              </label>
              <button className="button button-primary" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
