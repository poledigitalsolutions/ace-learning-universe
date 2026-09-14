"use client";

import { useState } from "react";

import {
  X,
  Globe2,
  CalendarDays,
  UsersRound,
  BookOpen,
  GraduationCap,
  Sparkles,
  Clock3,
  ClipboardCheck,
  BellRing,
  Mail,
  MessageCircle,
  ArrowRight,
  Target,
  MousePointer2,
} from "lucide-react";

type Subject = {
  id: string;
  name: string;
  shortName: string;
  image: string;
  color: string;
  description: string;
  longDescription: string;
  points: string[];
};

const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    shortName: "MATHEMATICS",
    image: "/images/islands/mathematics.webp",
    color: "blue",
    description:
      "Build strong problem solving & logical thinking skills",
    longDescription:
      "Build confidence with numbers, reasoning and mathematical problem solving through structured, engaging lessons designed around each child's learning stage.",
    points: [
      "Problem solving",
      "Logical reasoning",
      "Number confidence",
      "Structured practice",
    ],
  },
  {
    id: "science",
    name: "Science",
    shortName: "SCIENCE",
    image: "/images/islands/science.webp",
    color: "green",
    description:
      "Explore, Discover and Understand the World",
    longDescription:
      "Explore the world through engaging science lessons that encourage curiosity, understanding and the confidence to ask questions.",
    points: [
      "Scientific understanding",
      "Curiosity and discovery",
      "Practical thinking",
      "Concept confidence",
    ],
  },
  {
    id: "english",
    name: "English",
    shortName: "ENGLISH",
    image: "/images/islands/english.webp",
    color: "purple",
    description:
      "Improve Reading, Writing, Grammar & Communication",
    longDescription:
      "Develop stronger reading, writing, grammar and communication skills through carefully structured and engaging English lessons.",
    points: [
      "Reading",
      "Writing",
      "Grammar",
      "Communication",
    ],
  },
  {
    id: "literature",
    name: "Literature",
    shortName: "LITERATURE",
    image: "/images/islands/literature.webp",
    color: "teal",
    description:
      "Develop Imagination and a Love for Stories",
    longDescription:
      "Encourage imagination and a genuine love of stories through literature that helps children explore ideas, characters and different worlds.",
    points: [
      "Reading for pleasure",
      "Creative thinking",
      "Story analysis",
      "Imagination",
    ],
  },
  {
    id: "speaking",
    name: "Speaking",
    shortName: "SPEAKING",
    image: "/images/islands/speaking.webp",
    color: "orange",
    description:
      "Speak Confidently, Present Clearly, Lead Boldly",
    longDescription:
      "Help children become confident communicators by developing clear speaking, presentation and expression skills in a supportive environment.",
    points: [
      "Confidence",
      "Presentation skills",
      "Clear communication",
      "Leadership",
    ],
  },
  {
    id: "exam-prep",
    name: "Exam Preparation",
    shortName: "EXAM PREPARATION",
    image: "/images/islands/exam-prep.webp",
    color: "red",
    description:
      "Ace Your Exams with Smart Strategies",
    longDescription:
      "Build exam confidence with focused preparation, smart strategies, structured revision and support designed around individual needs.",
    points: [
      "Exam strategies",
      "Revision planning",
      "Time management",
      "Confidence building",
    ],
  },
  {
    id: "mentoring",
    name: "Mentoring",
    shortName: "MENTORING",
    image: "/images/islands/mentoring.webp",
    color: "navy",
    description:
      "Guidance, Support & Motivation Every Step",
    longDescription:
      "Provide children with encouragement, guidance and motivation while helping them develop confidence and a positive approach to learning.",
    points: [
      "Personal guidance",
      "Motivation",
      "Confidence",
      "Growth mindset",
    ],
  },
];

type ModalType =
  | "subject"
  | "about"
  | "why"
  | "contact"
  | "journey"
  | "pricing"
  | "enroll"
  | "registration"
  | null;

export default function Home() {
  const [activeSubject, setActiveSubject] =
    useState<Subject | null>(null);

  const [modal, setModal] =
    useState<ModalType>(null);

  const openSubject = (subject: Subject) => {
    setActiveSubject(subject);
    setModal("subject");
  };

  const closeModal = () => {
    setModal(null);
    setActiveSubject(null);
  };

  return (
    <main className="universe">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="sky-gradient" />

      <img
        className="background-cloud cloud-a"
        src="/images/environment/cloud-large.webp"
        alt=""
      />

      <img
        className="background-cloud cloud-b"
        src="/images/environment/cloud-large.webp"
        alt=""
      />

      <img
        className="background-cloud cloud-c"
        src="/images/environment/cloud-small.webp"
        alt=""
      />

      <img
        className="background-cloud cloud-d"
        src="/images/environment/cloud-small.webp"
        alt=""
      />

      <img
        className="distant-worlds"
        src="/images/decorations/distant-islands.webp"
        alt=""
      />

      <img
        className="mist-layer"
        src="/images/environment/mist.webp"
        alt=""
      />

      <img
        className="sparkles-layer"
        src="/images/decorations/sparkles.webp"
        alt=""
      />

      <img
        className="particles-layer"
        src="/images/decorations/magical-particles.webp"
        alt=""
      />

      <img
        className="birds-layer"
        src="/images/decorations/birds.webp"
        alt=""
      />

      {/* =========================================================
          TOP LEFT BRAND
      ========================================================= */}

      <section className="brand-area">
        <button
          className="logo-button"
          onClick={() => setModal("about")}
          aria-label="About ACE Learning Universe"
          type="button"
        >
          <img
            src="/images/logo.webp"
            alt="ACE"
            className="main-logo large-logo"
          />
        </button>

        <button
          className="left-info-image-button"
          onClick={() => setModal("journey")}
          aria-label="Start your ACE journey"
          type="button"
        >
          <img
            src="/images/left-info-panel.webp"
            alt="ACE Learning information"
            className="left-info-image"
          />

          <ClickHint
            text="CLICK FOR INFO"
            position="hint-left-info"
          />
        </button>

        <button
          className="registration-promo interactive-object"
          onClick={() => setModal("registration")}
          aria-label="Registration offers"
          type="button"
        >
          <img
            src="/images/registration-promo.webp"
            alt="Registration offers"
          />

          <ClickHint
            text="OPEN OFFERS"
            position="hint-right"
          />
        </button>
      </section>

      {/* =========================================================
          PRICE SCROLL
      ========================================================= */}

      <button
        className="price-scroll floating-scroll interactive-object"
        onClick={() => setModal("pricing")}
        aria-label="View lesson pricing"
        type="button"
      >
        <img
          src="/images/price-scroll.webp"
          alt="Pricing"
          className="price-scroll-image"
        />


        <ClickHint
          text="CLICK FOR PRICING"
          position="hint-bottom"
        />
      </button>

      {/* =========================================================
          WHY CHOOSE ACE BALLOON
      ========================================================= */}

      <button
        className="why-balloon floating-balloon interactive-object"
        onClick={() => setModal("why")}
        aria-label="Why choose ACE"
        type="button"
      >
        <img
          src="/images/balloon.webp"
          alt="Why choose ACE"
        />

        <ClickHint
          text="WHY ACE?"
          position="hint-right"
        />
      </button>

      {/* =========================================================
          CONTACT AIRSHIP
          No HTML text is placed over the image.
          The generated image contains its own visual text.
      ========================================================= */}

      <button
        className="contact-airship interactive-object"
        onClick={() => setModal("contact")}
        aria-label="Contact ACE"
        type="button"
      >
        <img
          src="/images/contact-airship.webp"
          alt="Contact ACE"
        />

        <ClickHint
          text="CLICK TO CONTACT"
          position="hint-bottom"
        />
      </button>

      {/* =========================================================
          CENTRAL CASTLE
      ========================================================= */}

      <section className="castle-world">
        <div className="castle-halo" />

        <button
          className="castle-button interactive-object"
          onClick={() => setModal("about")}
          aria-label="About ACE Academy"
          type="button"
        >
          <img
            src="/images/castle.webp"
            alt="ACE Academy"
            className="castle-image"
          />

          <ClickHint
            text="EXPLORE ACE"
            position="hint-castle"
          />
        </button>

        {/* Bridge glow paths */}

        <div className="bridge bridge-left" />
        <div className="bridge bridge-right" />
        <div className="bridge bridge-left-bottom" />
        <div className="bridge bridge-right-bottom" />
      </section>

      {/* =========================================================
          SUBJECT ISLANDS
      ========================================================= */}

      <section className="subject-world">
        {subjects.map((subject, index) => (
          <SubjectIsland
            key={subject.id}
            subject={subject}
            index={index}
            onExplore={() => openSubject(subject)}
          />
        ))}
      </section>

      {/* =========================================================
          BOTTOM FEATURE BAR
      ========================================================= */}

      <section className="feature-strip">
        <Feature
          icon={<GraduationCap />}
          text="Expert Tutors"
        />

        <span className="strip-divider" />

        <Feature
          icon={<UsersRound />}
          text="Live Interactive Classes"
        />

        <span className="strip-divider" />

        <Feature
          icon={<Clock3 />}
          text="Flexible Timings"
        />

        <span className="strip-divider" />

        <Feature
          icon={<ClipboardCheck />}
          text="Regular Progress Reports"
        />

        <span className="strip-divider" />

        <Feature
          icon={<BellRing />}
          text="Affordable Excellence"
        />
      </section>

      {/* =========================================================
          BOTTOM SLOGAN
      ========================================================= */}

      <div className="bottom-slogan">
        EMPOWERING YOUNG MINDS TO ACHIEVE, CHALLENGE AND EXCEL
      </div>

      {/* =========================================================
          ENROLL BOOK
      ========================================================= */}

      <button
        className="enroll-book interactive-object"
        onClick={() => setModal("enroll")}
        aria-label="Enroll today"
        type="button"
      >
        <img
          src="/images/enroll-book.webp"
          alt="Enroll today"
        />

      </button>

      {/* =========================================================
          MODALS
      ========================================================= */}

      {modal && (
        <ModalOverlay onClose={closeModal}>
          {modal === "subject" && activeSubject && (
            <SubjectModal
              subject={activeSubject}
              onClose={closeModal}
              onJourney={() => setModal("journey")}
            />
          )}

          {modal === "about" && (
            <AboutModal
              onClose={closeModal}
              onJourney={() => setModal("journey")}
            />
          )}

          {modal === "why" && (
            <WhyModal
              onClose={closeModal}
              onJourney={() => setModal("journey")}
            />
          )}

          {modal === "contact" && (
            <ContactModal onClose={closeModal} />
          )}

          {modal === "journey" && (
            <JourneyModal onClose={closeModal} />
          )}

          {modal === "pricing" && (
            <PricingModal
              onClose={closeModal}
              onJourney={() => setModal("journey")}
            />
          )}

          {modal === "enroll" && (
            <EnrollModal onClose={closeModal} />
          )}

          {modal === "registration" && (
            <RegistrationModal onClose={closeModal} />
          )}
        </ModalOverlay>
      )}
    </main>
  );
}

/* =============================================================
   INFORMATION CARD
============================================================= */

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="info-card">
      <div className="info-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

/* =============================================================
   CLICK HINT
============================================================= */

function ClickHint({
  text,
  position,
}: {
  text: string;
  position: string;
}) {
  return (
    <span
      className={`click-hint ${position}`}
      aria-hidden="true"
    >
      <span className="click-hint-sparkle">
        <Sparkles />
      </span>

      <MousePointer2 />

      <span>{text}</span>
    </span>
  );
}

/* =============================================================
   SUBJECT ISLAND
============================================================= */

function SubjectIsland({
  subject,
  index,
  onExplore,
}: {
  subject: Subject;
  index: number;
  onExplore: () => void;
}) {
  return (
    <article
      className={`subject-island subject-${index + 1} subject-color-${subject.color}`}
    >
      {/* Island */}

      <button
        className="island-image-button interactive-object"
        onClick={onExplore}
        aria-label={`Explore ${subject.name}`}
        type="button"
      >
        <img
          src={subject.image}
          alt=""
          className="island-image"
        />

        <span className="island-glow magical-glow" />

        <ClickHint
          text="CLICK TO EXPLORE"
          position="hint-island"
        />
      </button>

    </article>
  );
}

/* =============================================================
   FEATURE
============================================================= */

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="feature-item">
      {icon}
      <span>{text}</span>
    </div>
  );
}

/* =============================================================
   MODAL OVERLAY
============================================================= */

function ModalOverlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-shell">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          <X />
        </button>

        {children}
      </div>
    </div>
  );
}

/* =============================================================
   SUBJECT MODAL
============================================================= */

function SubjectModal({
  subject,
  onClose,
  onJourney,
}: {
  subject: Subject;
  onClose: () => void;
  onJourney: () => void;
}) {
  return (
    <div className="modal-content subject-modal">
      <div
        className={`modal-subject-icon ${subject.color}`}
      >
        <img
          src={subject.image}
          alt=""
        />
      </div>

      <div className="modal-copy">
        <span className="modal-eyebrow">
          ACE LEARNING UNIVERSE
        </span>

        <h2>{subject.name}</h2>

        <div className="modal-gold-line" />

        <p className="modal-lead">
          {subject.longDescription}
        </p>

        <div className="modal-points">
          {subject.points.map((point) => (
            <div key={point}>
              <Sparkles />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button
            className="primary-gold-button"
            onClick={onJourney}
            type="button"
          >
            START YOUR JOURNEY
            <ArrowRight />
          </button>

          <button
            className="secondary-button"
            onClick={onClose}
            type="button"
          >
            BACK TO UNIVERSE
          </button>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   ABOUT MODAL
============================================================= */

function AboutModal({
  onClose,
  onJourney,
}: {
  onClose: () => void;
  onJourney: () => void;
}) {
  return (
    <div className="modal-content standard-modal">
      <span className="modal-eyebrow">
        WELCOME TO ACE
      </span>

      <h2>
        A World Where Learning Comes Alive
      </h2>

      <div className="modal-gold-line" />

      <p>
        ACE Learning Universe is designed around
        the belief that learning should feel engaging,
        supportive and inspiring.
      </p>

      <p>
        We provide online tutoring for young learners
        aged <strong>5 – 16 years</strong>, supporting
        students from{" "}
        <strong>
          Key Stage 1 through Key Stage 4
        </strong>.
      </p>

      <div className="about-grid">
        <div>
          <GraduationCap />
          <strong>Expert Tutors</strong>
          <span>
            Qualified and experienced support.
          </span>
        </div>

        <div>
          <UsersRound />
          <strong>Personal Attention</strong>
          <span>
            Lessons designed around the learner.
          </span>
        </div>

        <div>
          <CalendarDays />
          <strong>Flexible Learning</strong>
          <span>
            All days of the week.
          </span>
        </div>

        <div>
          <Target />
          <strong>Academic Growth</strong>
          <span>
            Confidence and progress at every stage.
          </span>
        </div>
      </div>

      <div className="modal-actions">
        <button
          className="primary-gold-button"
          onClick={onJourney}
          type="button"
        >
          BOOK A FREE TRIAL
          <ArrowRight />
        </button>

        <button
          className="secondary-button"
          onClick={onClose}
          type="button"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

/* =============================================================
   WHY MODAL
============================================================= */

function WhyModal({
  onClose,
  onJourney,
}: {
  onClose: () => void;
  onJourney: () => void;
}) {
  const benefits = [
    "Experienced & Qualified Tutors",
    "Personalised 1-to-1 Attention",
    "Interactive & Engaging Lessons",
    "Boost Confidence & Academic Success",
    "Safe, Supportive & Friendly Environment",
    "Proven Results & Parent Satisfaction",
  ];

  return (
    <div className="modal-content standard-modal">
      <span className="modal-eyebrow">
        WHY ACE?
      </span>

      <h2>Why Choose ACE?</h2>

      <div className="modal-gold-line" />

      <p>
        ACE combines personalised support,
        engaging lessons and flexible online
        learning to help young minds progress
        with confidence.
      </p>

      <div className="large-benefits">
        {benefits.map((benefit, index) => (
          <div key={benefit}>
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <p>{benefit}</p>
          </div>
        ))}
      </div>

      <div className="modal-actions">
        <button
          className="primary-gold-button"
          onClick={onJourney}
          type="button"
        >
          START YOUR JOURNEY
          <ArrowRight />
        </button>

        <button
          className="secondary-button"
          onClick={onClose}
          type="button"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

/* =============================================================
   CONTACT MODAL
============================================================= */

function ContactModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="modal-content standard-modal">
      <span className="modal-eyebrow">
        CONTACT ACE
      </span>

      <h2>
        Let's Start the Conversation
      </h2>

      <div className="modal-gold-line" />

      <p>
        If you would like to discuss tutoring,
        availability or arrange a trial, contact
        ACE directly.
      </p>

      <div className="contact-large">
        <a href="mailto:achievechallengeexcel@gmail.com">
          <Mail />

          <div>
            <small>EMAIL</small>

            <strong>
              achievechallengeexcel@gmail.com
            </strong>
          </div>
        </a>

        <a
          href="https://wa.me/447831063801"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle />

          <div>
            <small>WHATSAPP</small>

            <strong>
              +44 7831063801
            </strong>
          </div>
        </a>
      </div>

      <div className="modal-actions">
        <button
          className="secondary-button"
          onClick={onClose}
          type="button"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

/* =============================================================
   JOURNEY MODAL
============================================================= */

function JourneyModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="modal-content standard-modal">
      <span className="modal-eyebrow">
        READY TO BEGIN?
      </span>

      <h2>Start Your ACE Journey</h2>

      <div className="modal-gold-line" />

      <p>
        Take the first step toward a more confident
        and engaging learning experience.
      </p>

      <div className="journey-options">
        <a
          href="mailto:achievechallengeexcel@gmail.com?subject=ACE%20Free%20Trial%20Enquiry"
          className="journey-option"
        >
          <GraduationCap />

          <div>
            <strong>Book a Free Trial</strong>

            <span>
              Contact ACE to arrange your trial lesson.
            </span>
          </div>

          <ArrowRight />
        </a>

        <a
          href="mailto:achievechallengeexcel@gmail.com?subject=ACE%20Tutoring%20Enquiry"
          className="journey-option"
        >
          <BookOpen />

          <div>
            <strong>Ask About Lessons</strong>

            <span>
              Enquire about subjects and availability.
            </span>
          </div>

          <ArrowRight />
        </a>

        <a
          href="https://wa.me/447831063801"
          target="_blank"
          rel="noopener noreferrer"
          className="journey-option"
        >
          <MessageCircle />

          <div>
            <strong>WhatsApp ACE</strong>

            <span>
              Send an enquiry directly through WhatsApp.
            </span>
          </div>

          <ArrowRight />
        </a>
      </div>

      <button
        className="secondary-button"
        onClick={onClose}
        type="button"
      >
        CLOSE
      </button>
    </div>
  );
}

/* =============================================================
   PRICING MODAL
============================================================= */

function PricingModal({
  onClose,
  onJourney,
}: {
  onClose: () => void;
  onJourney: () => void;
}) {
  return (
    <div className="modal-content standard-modal pricing-modal">
      <span className="modal-eyebrow">
        ACE LESSONS
      </span>

      <h2>Lessons Starting From</h2>

      <div className="price-big">£15</div>

      <div className="per-hour">
        PER HOUR
      </div>

      <div className="modal-gold-line" />

      <p>
        Flexible online tutoring designed to fit
        around your child's routine.
      </p>

      <div className="pricing-notes">
        <div>
          <CalendarDays />

          <span>
            All days of the week
          </span>
        </div>

        <div>
          <UsersRound />

          <span>
            Ages 5 – 16 years
          </span>
        </div>

        <div>
          <BookOpen />

          <span>
            Key Stage 1 – Key Stage 4
          </span>
        </div>
      </div>

      <div className="modal-actions">
        <button
          className="primary-gold-button"
          onClick={onJourney}
          type="button"
        >
          BOOK A FREE TRIAL
          <ArrowRight />
        </button>

        <button
          className="secondary-button"
          onClick={onClose}
          type="button"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

/* =============================================================
   ENROLL MODAL
============================================================= */

function EnrollModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="modal-content standard-modal">
      <span className="modal-eyebrow">
        ACE LEARNING UNIVERSE
      </span>

      <h2>Enroll Today</h2>

      <div className="modal-gold-line" />

      <p>
        Give your child the opportunity to learn,
        grow and achieve with personalised online
        tutoring.
      </p>

      <div className="enroll-highlight">
        <GraduationCap />

        <div>
          <strong>
            Ready to get started?
          </strong>

          <span>
            Contact ACE to discuss your child's
            learning needs.
          </span>
        </div>
      </div>

      <div className="modal-actions">
        <a
          href="mailto:achievechallengeexcel@gmail.com?subject=ACE%20Enrollment%20Enquiry"
          className="primary-gold-button"
        >
          EMAIL ACE
          <ArrowRight />
        </a>

        <a
          href="https://wa.me/447831063801"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button"
        >
          WHATSAPP
        </a>

        <button
          className="secondary-button"
          onClick={onClose}
          type="button"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

/* =============================================================
   REGISTRATION OFFERS MODAL
============================================================= */

function RegistrationModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="modal-content standard-modal registration-promo-modal">
      <span className="modal-eyebrow">
        ACE LEARNING UNIVERSE
      </span>

      <h2>Registration Offers</h2>

      <div className="modal-gold-line" />

      <div className="registration-promo-list">
        <div className="registration-promo-item">
          Registrations are now open.
        </div>

        <div className="registration-promo-item">
          Free Demo.
        </div>

        <div className="registration-promo-item">
          Refer a Friend and get 2 lessons free.
        </div>
      </div>

      <div className="modal-actions">
        <button
          className="secondary-button"
          onClick={onClose}
          type="button"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
