"use client";

import { useState } from "react";

type Subject = {
  id: string;
  name: string;
  image: string;
  position: string;
  description: string;
  details: string[];
};

type ModalType =
  | "about"
  | "why"
  | "subject"
  | "contact"
  | "enquiry"
  | null;

const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "MATHEMATICS",
    image: "/images/islands/mathematics.webp",
    position: "island-mathematics",
    description:
      "Build strong problem-solving and logical thinking skills.",
    details: [
      "Build strong mathematical foundations",
      "Develop logical and analytical thinking",
      "Improve problem-solving confidence",
      "Personalised support for individual learning needs",
      "Aligned with the UK curriculum",
    ],
  },
  {
    id: "science",
    name: "SCIENCE",
    image: "/images/islands/science.webp",
    position: "island-science",
    description:
      "Explore, discover and understand the world around you.",
    details: [
      "Explore scientific concepts through engaging lessons",
      "Develop curiosity and understanding",
      "Strengthen scientific reasoning",
      "Make difficult concepts easier to understand",
      "Support for school curriculum and examinations",
    ],
  },
  {
    id: "english",
    name: "ENGLISH",
    image: "/images/islands/english.webp",
    position: "island-english",
    description:
      "Improve reading, writing, grammar and communication.",
    details: [
      "Improve reading comprehension",
      "Strengthen writing skills",
      "Grammar and vocabulary development",
      "Improve communication",
      "Build confidence in written and spoken English",
    ],
  },
  {
    id: "literature",
    name: "LITERATURE",
    image: "/images/islands/literature.webp",
    position: "island-literature",
    description:
      "Develop imagination and a love for stories.",
    details: [
      "Explore stories, characters and themes",
      "Develop interpretation skills",
      "Encourage imagination and creativity",
      "Build confidence discussing literature",
      "Support analytical writing",
    ],
  },
  {
    id: "speaking",
    name: "SPEAKING",
    image: "/images/islands/speaking.webp",
    position: "island-speaking",
    description:
      "Speak confidently, present clearly and lead boldly.",
    details: [
      "Develop confident communication",
      "Improve presentation skills",
      "Practise clear and effective speaking",
      "Build confidence in expressing ideas",
      "Develop leadership and communication skills",
    ],
  },
  {
    id: "exam-prep",
    name: "EXAM PREPARATION",
    image: "/images/islands/exam-prep.webp",
    position: "island-exam",
    description:
      "Ace your exams with smart strategies.",
    details: [
      "Focused examination preparation",
      "Smart revision strategies",
      "Past-paper and question practice",
      "Time-management guidance",
      "Build confidence before examinations",
    ],
  },
  {
    id: "mentoring",
    name: "MENTORING",
    image: "/images/islands/mentoring.webp",
    position: "island-mentoring",
    description:
      "Guidance, support and motivation every step.",
    details: [
      "Personalised academic guidance",
      "Support with learning goals",
      "Build confidence and motivation",
      "Encourage positive study habits",
      "Help students stay focused on progress",
    ],
  },
];

const benefits = [
  {
    icon: "🎓",
    title: "Experienced & Qualified Tutors",
  },
  {
    icon: "♙",
    title: "Personalised 1-to-1 Attention",
  },
  {
    icon: "✦",
    title: "Interactive & Engaging Lessons",
  },
  {
    icon: "🏆",
    title: "Boost Confidence & Academic Success",
  },
  {
    icon: "♡",
    title: "Safe, Supportive & Friendly Environment",
  },
  {
    icon: "◆",
    title: "Proven Results & Parent Satisfaction",
  },
];

export default function LearningUniverse() {
  const [modal, setModal] = useState<ModalType>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(
    null
  );

  const openSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setModal("subject");
  };

  const closeModal = () => {
    setModal(null);
    setSelectedSubject(null);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/447831063801?text=Hello%20ACE%20Learning%20Universe,%20I%20would%20like%20to%20make%20an%20enquiry.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openEmail = () => {
    window.location.href =
      "mailto:achievechallengeexcel@gmail.com?subject=ACE Learning Universe Enquiry";
  };

  return (
    <main className="universe-page">
      <div className="universe-stage">
        {/* =========================================================
            BACKGROUND
        ========================================================= */}

        <div className="background-sky" />

        <img
          className="cloud cloud-one"
          src="/images/environment/cloud-large.webp"
          alt=""
        />

        <img
          className="cloud cloud-two"
          src="/images/environment/cloud-large.webp"
          alt=""
        />

        <img
          className="cloud cloud-three"
          src="/images/environment/cloud-small.webp"
          alt=""
        />

        <img
          className="cloud cloud-four"
          src="/images/environment/cloud-small.webp"
          alt=""
        />

        <img
          className="distant-islands"
          src="/images/decorations/distant-islands.webp"
          alt=""
        />

        <img
          className="sparkles"
          src="/images/decorations/sparkles.webp"
          alt=""
        />

        <img
          className="magical-particles"
          src="/images/decorations/magical-particles.webp"
          alt=""
        />

        <img
          className="mist"
          src="/images/environment/mist.webp"
          alt=""
        />

        {/* =========================================================
            TOP LEFT LOGO
        ========================================================= */}

        <button
          className="logo-button"
          onClick={() => setModal("about")}
          aria-label="About ACE Learning Universe"
        >
          <img src="/images/logo.webp" alt="ACE Learning Universe" />
        </button>

        {/* =========================================================
            BALLOON
        ========================================================= */}

        <button
          className="balloon-button"
          onClick={() => setModal("why")}
          aria-label="Why choose ACE?"
        >
          <img src="/images/balloon.webp" alt="Why choose ACE?" />

          <span className="balloon-glow" />
        </button>

        {/* =========================================================
            PRICE SCROLL
        ========================================================= */}

        <button
          className="price-scroll"
          onClick={() => setModal("enquiry")}
          aria-label="Lessons starting from £15 per hour"
        >
          <img src="/images/price-scroll.webp" alt="Lessons starting from £15 per hour" />

          <span className="price-overlay">
            <span>LESSONS STARTING FROM</span>
            <strong>£15</strong>
            <small>PER HOUR</small>
          </span>
        </button>

        {/* =========================================================
            LEFT INFORMATION CARD
        ========================================================= */}

        <section className="left-information-card">
          <div className="info-row">
            <span className="info-icon">◎</span>
            <div>
              <strong>ONLINE TUTORING</strong>
              <p>Learn from the comfort<br />of your home</p>
            </div>
          </div>

          <div className="info-row">
            <span className="info-icon">▣</span>
            <div>
              <strong>ALL DAYS OF THE WEEK</strong>
              <p>Flexible scheduling to fit<br />your routine</p>
            </div>
          </div>

          <div className="info-row">
            <span className="info-icon">♙</span>
            <div>
              <strong>AGES 5 – 16 YEARS</strong>
              <p>Nurturing young minds<br />at every stage</p>
            </div>
          </div>

          <div className="info-row">
            <span className="info-icon">▤</span>
            <div>
              <strong>KEY STAGE 1 – KEY STAGE 4</strong>
              <p>Aligned with the UK<br />Curriculum</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            CENTER CASTLE
        ========================================================= */}

        <button
          className="castle-button"
          onClick={() => setModal("about")}
          aria-label="About ACE Academy"
        >
          <img src="/images/castle.webp" alt="ACE Academy Castle" />

          <span className="castle-aura" />
        </button>

        {/* =========================================================
            BRIDGES
        ========================================================= */}

        <div className="bridge bridge-left-top" />
        <div className="bridge bridge-left-bottom" />
        <div className="bridge bridge-right-top" />
        <div className="bridge bridge-right-bottom" />

        {/* =========================================================
            SUBJECT ISLANDS
        ========================================================= */}

        <section className="subjects-layer">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              className={`subject-island ${subject.position}`}
              onClick={() => openSubject(subject)}
              aria-label={`Explore ${subject.name}`}
            >
              <span className="island-image-wrap">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="island-image"
                />

                <span className="island-light" />
              </span>

              <span className="subject-plaque">
                <img
                  src="/images/subject-plaque.webp"
                  alt=""
                  className="plaque-image"
                />

                <span className="subject-name">
                  {subject.name}
                </span>
              </span>
            </button>
          ))}
        </section>

        {/* =========================================================
            RIGHT CONTACT CARD
        ========================================================= */}

        <section className="royal-card contact-card">
          <div className="royal-corner royal-corner-tl" />
          <div className="royal-corner royal-corner-tr" />
          <div className="royal-corner royal-corner-bl" />
          <div className="royal-corner royal-corner-br" />

          <h2>CONTACT US</h2>

          <div className="royal-divider" />

          <button className="contact-line" onClick={openEmail}>
            <span className="contact-symbol">✉</span>
            <span>achievechallengeexcel@gmail.com</span>
          </button>

          <button className="contact-line" onClick={openWhatsApp}>
            <span className="contact-symbol whatsapp-symbol">◯</span>
            <span>+44 7831063801</span>
          </button>
        </section>

        {/* =========================================================
            WHY CHOOSE ACE CARD
        ========================================================= */}

        <section className="royal-card why-card">
          <div className="royal-corner royal-corner-tl" />
          <div className="royal-corner royal-corner-tr" />
          <div className="royal-corner royal-corner-bl" />
          <div className="royal-corner royal-corner-br" />

          <h2>WHY CHOOSE ACE?</h2>

          <div className="royal-divider" />

          <div className="benefits-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit.title}>
                <span>{benefit.icon}</span>
                <p>{benefit.title}</p>
              </div>
            ))}
          </div>

          <button
            className="journey-button"
            onClick={() => setModal("enquiry")}
          >
            START YOUR JOURNEY
            <span>→</span>
          </button>
        </section>

        {/* =========================================================
            ENROLL BOOK
        ========================================================= */}

        <button
          className="enroll-book"
          onClick={() => setModal("enquiry")}
          aria-label="Enroll today"
        >
          <img
            src="/images/enroll-book.webp"
            alt="Enroll Today"
          />

          <span>ENROLL<br />TODAY!</span>
        </button>

        {/* =========================================================
            BOTTOM FEATURE BAR
        ========================================================= */}

        <section className="feature-bar">
          <div className="feature-item">
            <span>🎓</span>
            <strong>Expert Tutors</strong>
          </div>

          <div className="feature-separator" />

          <div className="feature-item">
            <span>♙</span>
            <strong>Live Interactive Classes</strong>
          </div>

          <div className="feature-separator" />

          <div className="feature-item">
            <span>◷</span>
            <strong>Flexible Timings</strong>
          </div>

          <div className="feature-separator" />

          <div className="feature-item">
            <span>▣</span>
            <strong>Regular Progress Reports</strong>
          </div>

          <div className="feature-separator" />

          <div className="feature-item">
            <span>♧</span>
            <strong>Affordable Excellence</strong>
          </div>
        </section>

        {/* =========================================================
            BOTTOM TAGLINE
        ========================================================= */}

        <div className="bottom-tagline">
          EMPOWERING YOUNG MINDS TO ACHIEVE, CHALLENGE AND EXCEL
        </div>

        {/* =========================================================
            MODALS
        ========================================================= */}

        {modal && (
          <div
            className="modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className="modal-card">
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>

              {modal === "about" && (
                <>
                  <div className="modal-kicker">WELCOME TO ACE</div>
                  <h2>About ACE Academy</h2>

                  <p>
                    ACE Learning Universe creates a supportive and engaging
                    learning environment where young minds can build
                    confidence, strengthen academic foundations and develop
                    the skills they need to excel.
                  </p>

                  <p>
                    We provide online tutoring for children aged
                    <strong> 5 – 16 years</strong>, supporting students across
                    <strong> Key Stage 1 – Key Stage 4</strong> with the UK
                    Curriculum.
                  </p>

                  <div className="modal-grid">
                    <div>
                      <strong>ONLINE</strong>
                      <span>Learn from home</span>
                    </div>

                    <div>
                      <strong>AGES 5–16</strong>
                      <span>Support at every stage</span>
                    </div>

                    <div>
                      <strong>ALL DAYS</strong>
                      <span>Flexible scheduling</span>
                    </div>

                    <div>
                      <strong>£15 / HOUR</strong>
                      <span>Lessons starting from</span>
                    </div>
                  </div>

                  <button
                    className="modal-primary-button"
                    onClick={() => setModal("enquiry")}
                  >
                    START YOUR JOURNEY →
                  </button>
                </>
              )}

              {modal === "why" && (
                <>
                  <div className="modal-kicker">THE ACE DIFFERENCE</div>
                  <h2>Why Choose ACE?</h2>

                  <div className="modal-benefits">
                    {benefits.map((benefit) => (
                      <div key={benefit.title}>
                        <span>{benefit.icon}</span>
                        <p>{benefit.title}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    className="modal-primary-button"
                    onClick={() => setModal("enquiry")}
                  >
                    BOOK A TRIAL →
                  </button>
                </>
              )}

              {modal === "subject" && selectedSubject && (
                <>
                  <div className="modal-kicker">LEARNING WORLD</div>

                  <h2>{selectedSubject.name}</h2>

                  <p className="subject-modal-description">
                    {selectedSubject.description}
                  </p>

                  <div className="subject-modal-details">
                    {selectedSubject.details.map((detail) => (
                      <div key={detail}>
                        <span>✦</span>
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    className="modal-primary-button"
                    onClick={() => setModal("enquiry")}
                  >
                    ENQUIRE ABOUT {selectedSubject.name} →
                  </button>
                </>
              )}

              {modal === "contact" && (
                <>
                  <div className="modal-kicker">GET IN TOUCH</div>
                  <h2>Contact ACE</h2>

                  <p>
                    Have a question about tutoring, subjects, availability or
                    getting started? Contact ACE Learning Universe.
                  </p>

                  <div className="contact-modal-actions">
                    <button
                      className="modal-primary-button"
                      onClick={openEmail}
                    >
                      EMAIL US
                    </button>

                    <button
                      className="modal-secondary-button"
                      onClick={openWhatsApp}
                    >
                      WHATSAPP US
                    </button>
                  </div>

                  <div className="contact-modal-details">
                    <p>achievechallengeexcel@gmail.com</p>
                    <p>+44 7831063801</p>
                  </div>
                </>
              )}

              {modal === "enquiry" && (
                <>
                  <div className="modal-kicker">READY TO BEGIN?</div>
                  <h2>Start Your ACE Journey</h2>

                  <p>
                    Lessons start from <strong>£15 per hour</strong>.
                    Choose your preferred way to get in touch and enquire
                    about tutoring.
                  </p>

                  <div className="enquiry-options">
                    <button
                      className="modal-primary-button"
                      onClick={openWhatsApp}
                    >
                      WHATSAPP ENQUIRY
                    </button>

                    <button
                      className="modal-secondary-button"
                      onClick={openEmail}
                    >
                      EMAIL ENQUIRY
                    </button>
                  </div>

                  <div className="enquiry-note">
                    Online tutoring • Ages 5–16 • Key Stage 1–4
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}