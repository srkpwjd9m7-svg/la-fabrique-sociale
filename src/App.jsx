import './App.css'

const site = {
  name: 'La fabrique sociale',
  phone: '06 00 00 00 00',
  email: 'contact@lafabriquesociale.fr',
  area: '[Zone geographique]',
  personName: '[Votre nom]',
  rpps: '[a completer]',
}

const domains = [
  {
    title: 'Le budget',
    text: "Gestion budgetaire, aide financiere, aide a la constitution d'un dossier de surendettement.",
  },
  {
    title: 'La famille',
    text: 'Parentalite, gestion des conflits familiaux, deuil, accompagnement des personnes agees.',
  },
  {
    title: 'Le handicap',
    text: "Reconnaissance du handicap, maintien dans l'emploi, aides financieres, materielles et humaines.",
  },
  {
    title: "L'insertion",
    text: "Reconversion professionnelle, maintien dans l'emploi, recherche de logement et leviers financiers.",
  },
  {
    title: 'La retraite',
    text: "Mise a jour de votre releve de carriere, demande de retraite, evaluation d'un depart anticipe.",
  },
  {
    title: 'La sante',
    text: "Accompagnement de la personne malade et de ses proches, dossiers d'invalidite et maladie professionnelle.",
  },
]

const steps = [
  {
    phase: 'Phase 1',
    title: 'Echange telephonique',
    text: 'Diagnostic gratuit. A partir de cet echange, je vous transmets un devis selon le forfait adapte a votre situation.',
  },
  {
    phase: 'Phase 2',
    title: 'Rendez-vous physique',
    text: 'Rencontre et mise en place du lien de confiance. Je vous conseille et vous guide vers des outils adaptes.',
  },
  {
    phase: 'Phase 3',
    title: 'Administratif et suivi',
    text: 'En dehors de nos echanges : analyse, redaction, coordination, negociations avec les organismes concernes.',
  },
]

function CheckIcon() {
  return (
    <span className="hero-check-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  )
}

function Arrow() {
  return <span aria-hidden="true">→</span>
}

function PlaceholderPortrait() {
  return (
    <div className="portrait-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
      <span>Portrait a fournir</span>
    </div>
  )
}

function App() {
  return (
    <div className="mock-site">
      <header className="mock-header">
        <div className="mock-header__inner">
          <a className="mock-brand" href="#accueil">
            {site.name}
          </a>

          <nav className="mock-nav" aria-label="Navigation principale">
            <a href="#accueil">Accueil</a>
            <a href="#apropos">A propos</a>
            <a href="#domaines">Domaines d'intervention</a>
            <a href="#contact">Tarifs</a>
            <a className="mock-nav__cta" href="#contact">
              Prendre contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-block" id="accueil">
          <div className="shell hero-block__inner">
            <div className="hero-copy">
              <div className="mini-kicker mini-kicker--dot">
                Assistante sociale independante
              </div>

              <h1 className="hero-title">
                Quand le systeme bloque,
                <br />
                <em>je suis la.</em>
              </h1>

              <p className="hero-text">
                La fabrique sociale vous aide a reprendre la main sur vos
                demarches avec ecoute, confidentialite et un accompagnement sur
                mesure.
              </p>

              <div className="hero-points">
                <div className="hero-point">
                  <CheckIcon />
                  <span>Debloquer vos demarches administratives</span>
                </div>
                <div className="hero-point">
                  <CheckIcon />
                  <span>Comprendre et faire valoir vos droits</span>
                </div>
                <div className="hero-point">
                  <CheckIcon />
                  <span>Avancer concretement, a votre rythme</span>
                </div>
              </div>

              <div className="hero-actions">
                <a className="pill-button" href="#contact">
                  Prendre contact
                </a>
                <a className="text-link" href="#domaines">
                  Decouvrir l'accompagnement
                  <Arrow />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-frame portrait-frame--hero">
                <PlaceholderPortrait />
              </div>

              <div className="floating-card">
                <div className="mini-kicker mini-kicker--dot mini-kicker--small">
                  Premier contact gratuit
                </div>
                <div className="floating-card__phone">{site.phone}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="domains-block" id="domaines">
          <div className="shell">
            <div className="mini-kicker">Domaines d'intervention</div>
            <h2 className="section-title">
              Une approche humaine,
              <br />
              <em>un accompagnement sur-mesure.</em>
            </h2>

            <div className="domains-grid">
              {domains.map((domain) => (
                <article className="domain-card" key={domain.title}>
                  <div className="domain-card__icon" />
                  <h3>{domain.title}</h3>
                  <p>{domain.text}</p>
                  <a href="#contact">
                    En savoir plus
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="steps-block">
          <div className="shell">
            <div className="mini-kicker">Parcours d'accompagnement</div>
            <h2 className="section-title">
              Les <em>etapes cles</em> du suivi.
            </h2>

            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.phase}>
                  <div className="step-phase">{step.phase}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-block" id="apropos">
          <div className="shell about-block__inner">
            <div className="portrait-frame portrait-frame--about">
              <PlaceholderPortrait />
            </div>

            <div className="about-copy">
              <div className="mini-kicker">A propos</div>
              <h2 className="section-title">
                {site.personName},
                <br />
                <em>assistante sociale liberale.</em>
              </h2>
              <p>
                Apres plus de 10 ans d'experience en tant qu'assistante de
                service social, j'ai exerce dans des domaines varies :
                l'enfance et l'adolescence, le service social de proximite et
                le service social d'entreprise.
              </p>
              <p>
                J'ai choisi d'exercer en liberal afin d'offrir un
                accompagnement sur-mesure, confidentiel et adapte a chaque
                situation.
              </p>
              <a className="text-link" href="#contact">
                En savoir plus
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div className="shell contact-band__inner">
            <div className="contact-band__copy">
              <h2 className="contact-title">
                Parlons de <em>votre situation.</em>
              </h2>
              <p>
                Le premier echange est gratuit et sans engagement. Astuces,
                questionnement ou simplement pour discuter, je vous reponds.
              </p>
            </div>

            <div className="contact-band__stack">
              <div className="contact-item">
                <div className="contact-item__icon">☎</div>
                <div>
                  <div className="contact-label">M'appeler</div>
                  <a href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">✉</div>
                <div>
                  <div className="contact-label">M'ecrire</div>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>

              <a className="white-button" href={`mailto:${site.email}`}>
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mock-footer">
        <div className="shell">
          <div className="mock-footer__top">
            <div className="mock-footer__brand">
              <div className="mock-footer__title">{site.name}</div>
              <p>
                Assistante sociale independante. Un accompagnement humain,
                confidentiel et sur mesure.
              </p>
            </div>

            <div className="mock-footer__cols">
              <div className="mock-footer__col">
                <div className="footer-kicker">Navigation</div>
                <a href="#accueil">Accueil</a>
                <a href="#apropos">A propos</a>
                <a href="#domaines">Domaines d'intervention</a>
                <a href="#contact">Tarifs</a>
                <a href="#contact">Prendre contact</a>
              </div>

              <div className="mock-footer__col">
                <div className="footer-kicker">Contact</div>
                <span>{site.phone}</span>
                <span>{site.email}</span>
                <span>{site.area}</span>
              </div>
            </div>
          </div>

          <div className="mock-footer__bottom">
            <span>© La fabrique sociale 2026 · Mentions legales</span>
            <span>Numero RPPS : {site.rpps}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
