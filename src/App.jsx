import { useEffect, useState } from "react";
import egiLogo from "./assets/egi-logo.png";
import proKidsImage from "./assets/prokids.png";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("egi-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem("egi-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`site ${darkMode ? "dark-theme" : "light-theme"}`}>
      <div className="background-orb orb-green"></div>
      <div className="background-orb orb-blue"></div>

      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="scan-line"></div>

      <nav className="navbar">
        <a href="#" className="brand">
          <img
            src={egiLogo}
            className="brand-logo"
            alt="Educator Games India"
          />
        </a>

        <div className="nav-links">
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((current) => !current)}
            aria-label="Toggle website theme"
          >
            <span className="theme-icon">
              {darkMode ? "☀" : "☾"}
            </span>

            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>

          <a href="#games" className="nav-button">
            Explore Games
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content reveal hero-reveal">
            <div className="hero-label">
              <span></span>
              INDIAN GAME DEVELOPMENT STUDIO
            </div>

            <h1>
              We create
              <span> games </span>
              worth playing.
            </h1>

            <p className="hero-text">
              Educator Games India creates original games, exciting gameplay
              and memorable digital experiences built for players.
            </p>

            <div className="hero-actions">
              <a href="#games" className="primary-button">
                View Our Games
                <span>→</span>
              </a>

              <a href="#about" className="secondary-button">
                About EGI
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>01</strong>
                <span>GAME</span>
              </div>

              <div>
                <strong>EGI</strong>
                <span>STUDIO</span>
              </div>

              <div>
                <strong>PLAY</strong>
                <span>CREATE</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal hero-visual-reveal">
            <div className="visual-ring ring-one"></div>
            <div className="visual-ring ring-two"></div>

            <div className="game-card">
              <img
                src={proKidsImage}
                className="prokids-image"
                alt="ProKids Maze Game"
              />

              <div className="card-overlay"></div>

              <div className="card-top-info">
                <span>EGI / 001</span>

                <span className="online-status">
                  <i></i>
                  ONLINE
                </span>
              </div>

              <div className="card-bottom-info">
                <span>PROKIDS</span>
                <span>MAZE GAME</span>
                <span>PLAY</span>
              </div>

              <div className="card-shine"></div>

              <div className="card-corner top-left"></div>
              <div className="card-corner top-right"></div>
              <div className="card-corner bottom-left"></div>
              <div className="card-corner bottom-right"></div>
            </div>
          </div>
        </section>

        <section className="games-section" id="games">
          <div className="section-heading reveal">
            <div>
              <div className="section-label">OUR GAMES</div>

              <h2>
                Games made
                <span className="heading-accent"> to play.</span>
              </h2>
            </div>

            <p>
              Explore the games and interactive experiences being created by
              the EGI studio.
            </p>
          </div>

          <div className="games-grid">
            <article className="game-showcase featured reveal">
              <div className="game-art art-prokids">
                <img src={proKidsImage} alt="ProKids Maze Game" />

                <div className="game-badge">
                  <span className="status-dot"></span>
                  AVAILABLE NOW
                </div>

                <div className="game-number">01</div>
              </div>

              <div className="game-info">
                <div className="game-title-area">
                  <p>01 / EGI ORIGINAL</p>

                  <h3>ProKids Maze Game</h3>

                  <span className="game-type">
                    Adventure · Maze · Casual
                  </span>
                </div>

                <a href="#contact" className="game-button">
                  Play ProKids
                  <span>→</span>
                </a>
              </div>
            </article>

            <article className="game-showcase reveal delay-one">
              <div className="game-art art-two">
                <span>IN DEVELOPMENT</span>

                <div className="art-content">
                  <small>EGI ORIGINAL</small>
                  <strong>GAME 02</strong>
                </div>
              </div>

              <div className="game-info">
                <div>
                  <p>02 / ORIGINAL GAME</p>
                  <h3>Something exciting is loading.</h3>
                </div>

                <a href="#contact" className="game-button">
                  Discover
                  <span>→</span>
                </a>
              </div>
            </article>

            <article className="game-showcase reveal delay-two">
              <div className="game-art art-three">
                <span>COMING SOON</span>

                <div className="art-content">
                  <small>EGI ORIGINAL</small>
                  <strong>GAME 03</strong>
                </div>
              </div>

              <div className="game-info">
                <div>
                  <p>03 / ORIGINAL GAME</p>
                  <h3>More worlds are coming.</h3>
                </div>

                <a href="#contact" className="game-button">
                  Discover
                  <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section reveal" id="about">
          <div>
            <div className="section-label">ABOUT EGI</div>

            <h2>
              We build games
              <span className="heading-accent"> with personality.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-text">
              Educator Games India is an independent game development studio
              focused on creating original games, creative experiences and
              digital worlds that people want to play.
            </p>

            <div className="about-line"></div>

            <div className="about-points">
              <span>01 / ORIGINAL IDEAS</span>
              <span>02 / GAMEPLAY FIRST</span>
              <span>03 / BUILT TO PLAY</span>
            </div>
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="section-label">LET'S CREATE</div>

          <h2>
            Have a
            <span className="heading-accent"> game idea?</span>
          </h2>

          <p>Let's turn ideas into something people can play.</p>

          <a
            href="mailto:educatorgamesindia@gmail.com"
            className="contact-email"
          >
            educatorgamesindia@gmail.com
          </a>

          <div className="contact-actions">
            <a
              href="mailto:educatorgamesindia@gmail.com"
              className="primary-button"
            >
              Contact EGI
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>EDUCATOR GAMES INDIA</strong>
          <span>© 2026 EGI. All rights reserved.</span>
        </div>

        <div className="footer-links">
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;