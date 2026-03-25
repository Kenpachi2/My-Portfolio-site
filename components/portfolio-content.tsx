'use client';

import { useEffect, useRef } from 'react';
import '../app/portfolio.css';

export default function PortfolioContent() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursor || !cursorRing) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>

      <nav>
        <a href="#" className="nav-logo">IU<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certs">Certs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-left">
          <div className="hero-tag">Available for AI Roles</div>
          <h1>
            Umeadi<br />
            <span className="line2">Ifeanyi</span>
            <span className="line3">AI Trainer & Data Specialist</span>
          </h1>
          <p className="hero-desc">
            Detail-oriented professional skilled in AI response evaluation, prompt engineering,
            and data annotation. Bridging structured analytical thinking with frontend
            development to deliver precise, high-quality AI training outputs.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">↗ Get In Touch</a>
            <a href="#experience" className="btn-outline">View Experience</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="stat-panel">
            <div className="stat-row">
              <span className="stat-label">Location</span>
              <span className="stat-val">Abuja,Nigeria</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Role Focus</span>
              <span className="stat-val accent">AI Training</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">ALX Score</span>
              <span className="stat-val accent">97%</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Education</span>
              <span className="stat-val">B.Sc Geology</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Stack</span>
              <span className="stat-val">React · JS · Git</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Status</span>
              <span className="stat-val accent">Open to Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="reveal">
          <div className="section-label">What I Do</div>
          <div className="section-title">Core Capabilities</div>
        </div>
        <div className="skills-grid reveal">
          <div className="skill-card">
            <div className="skill-icon">🧠</div>
            <div className="skill-name">AI Response Evaluation</div>
            <div className="skill-desc">Assessing AI outputs for accuracy, clarity, and completeness. Ranking responses with structured reasoning and identifying factual inconsistencies.</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">✍️</div>
            <div className="skill-name">Prompt Engineering</div>
            <div className="skill-desc">Designing structured prompts with clear constraints. Iterating and refining based on model responses to achieve desired outcomes.</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📊</div>
            <div className="skill-name">Data Annotation</div>
            <div className="skill-desc">Labeling datasets with precision. Creating high-quality training data for machine learning models with meticulous attention to detail.</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔍</div>
            <div className="skill-name">Quality Assurance</div>
            <div className="skill-desc">Rigorous testing and validation of AI outputs. Ensuring consistency, accuracy, and alignment with project specifications.</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <div className="skill-name">Frontend Development</div>
            <div className="skill-desc">Building responsive interfaces with React. Creating intuitive user experiences with clean, maintainable code.</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📈</div>
            <div className="skill-name">Analytics & Reporting</div>
            <div className="skill-desc">Tracking metrics and providing insights. Communicating findings through clear documentation and dashboards.</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="reveal">
          <div className="section-label">Work History</div>
          <div className="section-title">Professional Experience</div>
        </div>
        <div className="exp-list reveal">
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-tag">CURRENT</div>
              <div className="exp-period">2024 — Present</div>
            </div>
            <div>
              <div className="exp-title">AI Training Specialist</div>
              <div className="exp-company">Labrum AI</div>
              <ul className="exp-points">
                <li>Evaluate and rank AI-generated responses across diverse domains</li>
                <li>Design effective prompts for model evaluation and training</li>
                <li>Maintain high quality standards with 97%+ accuracy</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-tag">PREVIOUS</div>
              <div className="exp-period">2023 — 2024</div>
            </div>
            <div>
              <div className="exp-title">Data Annotation Specialist</div>
              <div className="exp-company">Scale AI</div>
              <ul className="exp-points">
                <li>Annotated training datasets for machine learning projects</li>
                <li>Ensured data quality and consistency across large datasets</li>
                <li>Collaborated with team leads on quality improvements</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-tag">FREELANCE</div>
              <div className="exp-period">2023 — Present</div>
            </div>
            <div>
              <div className="exp-title">Frontend Developer</div>
              <div className="exp-company">Self-employed</div>
              <ul className="exp-points">
                <li>Built responsive web applications using React and Next.js</li>
                <li>Implemented UI/UX designs with attention to detail</li>
                <li>Managed client projects from conception to deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section id="certs" className="certs-section">
        <div className="reveal">
          <div className="section-label">Credentials</div>
          <div className="section-title">Certifications & Training</div>
        </div>
        <div className="certs-grid reveal">
          <div className="cert-card">
            <div className="cert-num">01</div>
            <div>
              <div className="cert-name">ALX Advanced AI Training Program</div>
              <div className="cert-org">ALX Africa</div>
              <div className="cert-score">COMPLETED</div>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-num">02</div>
            <div>
              <div className="cert-name">React & Next.js Specialization</div>
              <div className="cert-org">Udemy</div>
              <div className="cert-score">COMPLETED</div>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-num">03</div>
            <div>
              <div className="cert-name">Data Science & ML Fundamentals</div>
              <div className="cert-org">Coursera</div>
              <div className="cert-score">90% score</div>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-num">04</div>
            <div>
              <div className="cert-name">PROJECT MANAGEMENT</div>
              <div className="cert-org">Project Management Institute</div>
              <div className="cert-score">COMPLETED</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="reveal">
          <div className="section-label">Get In Touch</div>
          <div className="section-title">Contact</div>
        </div>
        <div className="contact-section reveal">
          <div>
            <a href="mailto:hello@ifeanyi.dev" className="contact-line">
              <span className="contact-line-icon">✉️</span>
              ifeanyiumeadi201@gmail.com
            </a>
            <a href="https://twitter.com" className="contact-line">
              <span className="contact-line-icon">𝕏</span>
              @anyi_umeadi
            </a>
            <a href="https://linkedin.com" className="contact-line">
              <span className="contact-line-icon">🔗</span>
              /in/ifeanyi-umeadi
            </a>
            <a href="https://github.com/Kenpachi2" className="contact-line">
              <span className="contact-line-icon">⚙️</span>
              github.com/Kenpachi2
            </a>
          </div>
          <div className="contact-right">
            <h3>Always Open to Opportunities</h3>
            <p>
              I'm actively looking for roles that leverage my AI training, Project management and frontend development expertise. Whether you have a project in mind or just want to chat about AI, tech, or design—feel free to reach out.
            </p>
            <div className="availability">
              <span className="avail-dot"></span>
              Available for freelance & full-time roles
            </div>
            <div className="tech-row">
              <span className="tech-badge highlight">AI Training</span>
              <span className="tech-badge highlight">React</span>
              <span className="tech-badge highlight">Next.js</span>
              <span className="tech-badge highlight">JavaScript</span>
              <span className="tech-badge highlight">Prompt Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2024 Ifeanyi Umeadi</span>
        <span>Crafted with precision</span>
      </footer>
    </main>
  );
}
