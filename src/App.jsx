import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const steps = [
  {
    number: '01',
    title: 'Push a change',
    description: 'Make an update and push it to the main branch.',
    icon: '↑',
  },
  {
    number: '02',
    title: 'Actions gets to work',
    description: 'GitHub Actions builds and checks the project for you.',
    icon: '⌘',
  },
  {
    number: '03',
    title: 'Ship it live',
    description: 'A successful build publishes the site to GitHub Pages.',
    icon: '↗',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4.25 10h11.5M10 4.25 15.75 10 10 15.75" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.25-5.09-5.55 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.55.23 2.69.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.31-2.61 5.26-5.1 5.54.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  )
}

function App() {
  return (
    <main>
      <header className="site-header page-shell">
        <a className="brand" href="#top" aria-label="Shipshape home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>shipshape<span className="brand-period">.</span></span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#workflow">The workflow</a>
          <a href="#about">Built with</a>
        </nav>

        <a
          className="header-link"
          href="https://github.com/rahiltariq07/ReactCICDDemo"
          target="_blank"
          rel="noreferrer"
        >
          View the repo <ArrowIcon />
        </a>
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> MY FIRST AUTOMATED DEPLOYMENT</div>
          <h1>From a little commit to <span>live on the web.</span></h1>
          <p className="hero-description">
            A hands-on React project exploring how CI/CD turns every push into
            a polished, published website.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#workflow">
              See how it works <ArrowIcon />
            </a>
            <a
              className="button button-quiet"
              href="https://github.com/rahiltariq07/ReactCICDDemo/actions"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> Explore Actions
            </a>
          </div>
          <div className="hero-note">
            <span className="note-avatars" aria-hidden="true"><i>R</i><i>✓</i></span>
            <span>Built with curiosity. Deployed with automation.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Illustration of an automated deployment pipeline">
          <div className="art-glow" />
          <img className="layer-art" src={heroImg} alt="" />
          <div className="code-window">
            <div className="window-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span>deploy.yml</span>
              <span className="window-branch">main</span>
            </div>
            <div className="code-lines" aria-hidden="true">
              <p><span>01</span> <b className="code-purple">name:</b> <em>Deploy site</em></p>
              <p><span>02</span> <b className="code-purple">on:</b> <em>[push]</em></p>
              <p><span>03</span></p>
              <p><span>04</span> <b className="code-purple">jobs:</b></p>
              <p><span>05</span> &nbsp; <b className="code-blue">build</b> <em>and ship</em></p>
              <p><span>06</span> &nbsp; <b className="code-green">✓</b> <em>all systems go</em></p>
            </div>
            <div className="window-footer"><span className="success-check">✓</span> Example workflow <span>·</span> <b>push to deploy</b></div>
          </div>
          <div className="deploy-card">
            <span className="deploy-icon"><span>↗</span></span>
            <span><b>GitHub Pages</b><small>push → published site</small></span>
            <span className="deploy-check">✓</span>
          </div>
          <span className="art-sparkle sparkle-one">✳</span>
          <span className="art-sparkle sparkle-two">✳</span>
        </div>

        <div className="hero-bottom">
          <span>THE EVERYDAY DEPLOY LOOP</span>
          <span className="scroll-cue">Scroll to explore <span>↓</span></span>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <span className="section-label">A SMALL CHANGE. A BIG JOURNEY.</span>
              <h2>Three steps to <span>shipshape.</span></h2>
            </div>
            <p>Less “works on my machine.” More “look what I just shipped.”</p>
          </div>
          <div className="workflow-grid">
            {steps.map((step) => (
              <article className="workflow-card" key={step.number}>
                <div className="card-topline"><span>{step.number}</span><span className="step-icon">{step.icon}</span></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="card-arrow" aria-hidden="true"><ArrowIcon /></span>
              </article>
            ))}
          </div>
          <div className="workflow-caption">
            <span className="caption-line" />
            <span>One workflow file. A whole lot less manual work.</span>
            <span className="caption-line" />
          </div>
        </div>
      </section>

      <section className="stack-section page-shell" id="about">
        <div className="stack-copy">
          <span className="section-label">THE TOOLS BEHIND THE MAGIC</span>
          <h2>Made to learn.<br /><span>Ready to grow.</span></h2>
          <p>
            A simple React app, a speedy Vite build, and GitHub Actions doing
            the repeatable bits. This is what a modern web workflow can look like.
          </p>
          <a
            className="text-link"
            href="https://github.com/rahiltariq07/ReactCICDDemo/actions"
            target="_blank"
            rel="noreferrer"
          >
            Take a peek at the workflow <ArrowIcon />
          </a>
        </div>
        <div className="stack-card">
          <div className="stack-card-heading">
            <span>IN THIS PROJECT</span>
            <span className="stack-status"><i /> PROJECT TOOLKIT</span>
          </div>
          <div className="stack-item">
            <span className="stack-logo react-logo"><img src={reactLogo} alt="" /></span>
            <span><b>React</b><small>The UI you’re looking at</small></span>
            <span className="stack-item-arrow">↗</span>
          </div>
          <div className="stack-item">
            <span className="stack-logo vite-logo"><img src={viteLogo} alt="" /></span>
            <span><b>Vite</b><small>Fast builds, happy feedback loops</small></span>
            <span className="stack-item-arrow">↗</span>
          </div>
          <div className="stack-item">
            <span className="stack-logo actions-logo"><GithubIcon /></span>
            <span><b>GitHub Actions</b><small>Automate, build, deploy</small></span>
            <span className="stack-item-arrow">↗</span>
          </div>
        </div>
      </section>

      <section className="closing-cta page-shell">
        <div className="cta-pattern" aria-hidden="true">✳</div>
        <span className="section-label">YOUR TURN, FUTURE DEPLOYER</span>
        <h2>Curiosity looks good <span>on you.</span></h2>
        <p>Explore the code, follow a workflow, and make this little project your own.</p>
        <a
          className="button button-dark"
          href="https://github.com/rahiltariq07/ReactCICDDemo"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon /> Find me on GitHub <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer page-shell">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>shipshape<span className="brand-period">.</span></span>
        </a>
        <span>A tiny project with a big “I did that” feeling.</span>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </footer>
    </main>
  )
}

export default App
