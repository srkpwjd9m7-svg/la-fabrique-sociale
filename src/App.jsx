import './App.css'

const site = {
  name: 'La fabrique sociale',
  phone: '06 00 00 00 00',
  email: 'contact@lafabriquesociale.fr',
  area: '[Zone geographique]',
  legal: 'Mentions legales',
  rpps: '[a completer]',
  personName: '[Votre nom]',
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

const navItems = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'A propos' },
  { href: '#domaines', label: "Domaines d'intervention" },
  { href: '#tarifs', label: 'Tarifs' },
]

function PlaceholderPortrait({ label }) {
  return (
    <div className="portrait-shell">
      <div className="portrait-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      </div>
      <span>{label}</span>
    </div>
  )
}

function DomainCard({ title, text }) {
  return (
    <article className="domain-card">
      <div className="domain-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#contact">
        En savoir plus
        <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-title" href="#accueil">
            {site.name}
          </a>

          <nav className="site-nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact">
              Prendre contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="accueil">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="section-kicker with-dot">
                Assistante sociale independante
              </div>
              <h1>
                Quand le systeme bloque,
                <br />
                <em>je suis la.</em>
              </h1>
              <p className="hero-text">
                La fabrique sociale vous aide a reprendre la main sur vos
                demarches avec ecoute, confidentialite et un accompagnement sur
                mesure.
              </p>

              <ul className="hero-list">
                <li>Debloquer vos demarches administratives</li>
                <li>Comprendre et faire valoir vos droits</li>
                <li>Avancer concretement, a votre rythme</li>
              </ul>

              <div className="hero-actions">
                <a className="button-primary" href="#contact">
                  Prendre contact
                </a>
                <a className="button-link" href="#domaines">
                  Decouvrir l'accompagnement
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="hero-aside">
              <div className="portrait-card portrait-card-large">
                <PlaceholderPortrait label="Portrait a fournir" />
              </div>

              <div className="contact-float">
                <div className="section-kicker with-dot small">
                  Premier contact gratuit
                </div>
                <a href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="domains-section" id="domaines">
          <div className="content-shell">
            <div className="section-kicker">Domaines d'intervention</div>
            <h2>
              Une approche humaine,
              <br />
              <em>un accompagnement sur-mesure.</em>
            </h2>

            <div className="domains-grid">
              {domains.map((domain) => (
                <DomainCard key={domain.title} {...domain} />
              ))}
            </div>
          </div>
        </section>

        <section className="steps-section">
          <div className="content-shell">
            <div className="section-kicker">Parcours d'accompagnement</div>
            <h2>
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

        <section className="about-section-new" id="apropos">
          <div className="content-shell about-layout">
            <div className="portrait-card portrait-card-medium">
              <PlaceholderPortrait label="Portrait a fournir" />
            </div>

            <div className="about-copy">
              <div className="section-kicker">A propos</div>
              <h2>
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
              <a className="button-link" href="#contact">
                En savoir plus
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div className="content-shell contact-band-inner">
            <div className="contact-band-copy">
              <h2>
                Parlons de <em>votre situation.</em>
              </h2>
              <p>
                Le premier echange est gratuit et sans engagement. Astuces,
                questionnement ou simplement pour discuter, je vous reponds.
              </p>
            </div>

            <div className="contact-band-actions">
              <div className="contact-line">
                <div className="contact-icon">☎</div>
                <div>
                  <div className="contact-mini-label">M'appeler</div>
                  <a href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a>
                </div>
              </div>

              <div className="contact-line">
                <div className="contact-icon">✉</div>
                <div>
                  <div className="contact-mini-label">M'ecrire</div>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>

              <a className="button-white" href={`mailto:${site.email}`}>
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="tarifs">
        <div className="content-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-title">{site.name}</div>
              <p>
                Assistante sociale independante. Un accompagnement humain,
                confidentiel et sur mesure.
              </p>
            </div>

            <div className="footer-columns">
              <div className="footer-column">
                <div className="footer-label">Navigation</div>
                <a href="#accueil">Accueil</a>
                <a href="#apropos">A propos</a>
                <a href="#domaines">Domaines d'intervention</a>
                <a href="#tarifs">Tarifs</a>
                <a href="#contact">Prendre contact</a>
              </div>

              <div className="footer-column">
                <div className="footer-label">Contact</div>
                <span>{site.phone}</span>
                <span>{site.email}</span>
                <span>{site.area}</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {site.name} 2026 · {site.legal}
            </span>
            <span>Numero RPPS : {site.rpps}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
