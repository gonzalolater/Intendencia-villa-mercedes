const priorities = [
  {
    number: "01",
    title: "Una ciudad para encontrarnos",
    description:
      "Espacios públicos cuidados, accesibles y pensados para compartir cada barrio.",
  },
  {
    number: "02",
    title: "Más oportunidades cerca",
    description:
      "Impulsar el trabajo, el comercio y el talento local para que Villa Mercedes siga creciendo.",
  },
  {
    number: "03",
    title: "Un municipio que escucha",
    description:
      "Una gestión abierta, presente y construida junto a quienes viven la ciudad todos los días.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function Home() {
  return (
    <>
      <header className="site-header">
        <a aria-label="Gonzalo Aguilar, inicio" className="brand" href="#inicio">
          <span aria-hidden="true" className="brand-mark">
            GA
          </span>
          <span className="brand-copy">
            <strong>Gonzalo Aguilar</strong>
            <span>Villa Mercedes · 2027</span>
          </span>
        </a>
        <nav aria-label="Navegación principal" className="main-nav">
          <a href="#proyecto">El proyecto</a>
          <a href="#ejes">Ejes</a>
          <a className="nav-cta" href="#participa">
            Sé parte <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Villa Mercedes, San Luis · Elecciones 2027
            </p>
            <h1 id="hero-title">
              El futuro de
              <br />
              nuestra ciudad
              <br />
              <span>lo hacemos</span>
              <br />
              <span className="highlight">entre todos.</span>
            </h1>
            <p className="hero-description">
              Una nueva manera de pensar Villa Mercedes: con ideas, escucha y
              compromiso con cada barrio.
            </p>
            <a className="button button-dark" href="#proyecto">
              Conocé el proyecto <ArrowIcon />
            </a>
          </div>
          <div
            aria-label="Villa Mercedes, una ciudad para compartir"
            className="hero-art"
            role="img"
          >
            <div className="art-sun" />
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <div className="art-ribbon">VM</div>
            <div className="cityscape cityscape-back">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="cityscape cityscape-front">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="art-caption">
              <span>El lugar que elegimos</span>
              <strong>Villa Mercedes</strong>
            </div>
            <span aria-hidden="true" className="art-star">
              ✳
            </span>
          </div>
          <a className="scroll-cue" href="#proyecto">
            <span className="scroll-line" />
            Deslizá para conocer
          </a>
        </section>

        <section className="intro-section" id="proyecto">
          <p className="section-index">01 / EL PROYECTO</p>
          <div className="intro-content">
            <h2>
              Una ciudad mejor
              <br />
              <span>se construye en equipo.</span>
            </h2>
            <div className="intro-note">
              <p>
                Villa Mercedes tiene todo para seguir creciendo. Creemos en una
                ciudad que cuida lo que somos y abre caminos para lo que podemos
                ser.
              </p>
              <p>
                Este proyecto empieza escuchando. Porque las mejores ideas
                nacen cuando las pensamos juntos.
              </p>
              <a className="text-link" href="#ejes">
                Nuestros ejes <ArrowIcon />
              </a>
            </div>
          </div>
          <div aria-hidden="true" className="intro-stamp">
            <span>HECHO</span>
            <strong>acá</strong>
            <span>CON VOS</span>
          </div>
        </section>

        <section className="priorities-section" id="ejes">
          <div className="section-heading">
            <div>
              <p className="section-index">02 / LO QUE NOS MUEVE</p>
              <h2>
                Ideas para una ciudad
                <br />
                que va por más.
              </h2>
            </div>
            <p>
              Tres puntos de partida para construir, entre todos, la Villa
              Mercedes que soñamos.
            </p>
          </div>
          <div className="priority-grid">
            {priorities.map((priority) => (
              <article className="priority-card" key={priority.number}>
                <span className="priority-number">{priority.number}</span>
                <div className="priority-arrow">
                  <ArrowIcon />
                </div>
                <h3>{priority.title}</h3>
                <p>{priority.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="join-section" id="participa">
          <div className="join-decoration" aria-hidden="true">
            <span>V</span>
            <span>M</span>
          </div>
          <div className="join-copy">
            <p className="section-index">03 / ESTA CONVERSACIÓN ES DE TODOS</p>
            <h2>
              Tu voz también
              <br />
              <span>construye ciudad.</span>
            </h2>
            <p>
              Queremos conocer tus ideas y lo que te gustaría para el futuro de
              Villa Mercedes. El primer paso es conversar.
            </p>
            <a className="button button-light" href="#inicio">
              Volver al inicio <ArrowIcon />
            </a>
          </div>
          <span aria-hidden="true" className="join-star">
            ✳
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <a
          aria-label="Gonzalo Aguilar, inicio"
          className="brand footer-brand"
          href="#inicio"
        >
          <span aria-hidden="true" className="brand-mark">
            GA
          </span>
          <span className="brand-copy">
            <strong>Gonzalo Aguilar</strong>
            <span>Villa Mercedes · 2027</span>
          </span>
        </a>
        <p>Un proyecto colectivo para nuestra ciudad.</p>
        <a className="back-to-top" href="#inicio">
          Volver arriba ↑
        </a>
      </footer>
    </>
  );
}

export default Home;
