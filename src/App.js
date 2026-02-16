import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowRight, Brain, Code2, Database, TrendingUp, Filter, Award, MapPin, BookOpen, Trophy, Menu, X, ChevronRight, Briefcase, GraduationCap, Phone, Globe } from "lucide-react";

const FONTS_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
  @keyframes pulseGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(139,92,246,0.5); }
`;

// ════════════════════════════════════════════════════════════════
// ▶ CHANGE YOUR PROFILE PHOTO HERE — just swap the URL below
// ════════════════════════════════════════════════════════════════
const PROFILE_PHOTO_URL = "https://media.licdn.com/dms/image/v2/D4E03AQFeSUM0qAVwlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684601680613?e=1772668800&v=beta&t=3UASsKEHrc4hZ0G4GxJRIiG8r9sCcyxNIaESJz5uvdY";
// Replace with your actual photo URL (LinkedIn, GitHub, Imgur, etc.)

function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

function AnimatedSection({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>{children}</div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────

const skills = [
  {
    category: "Machine Learning & Deep Learning",
    icon: Brain, color: "#818cf8",
    items: ["PyTorch", "CNNs / RNNs / Transformers", "Computer Vision & NLP", "Model Optimization & Deployment"],
  },
  {
    category: "Frameworks & Tools",
    icon: Code2, color: "#a78bfa",
    items: ["Python (Advanced)", "Hugging Face", "scikit-learn / Pandas / NumPy", "VBA", "MLflow / Docker", "Power BI / Excel", "Git"],
  },
  {
    category: "Mathematics — Prépa ECS & ML",
    icon: BookOpen, color: "#c084fc",
    items: [
      "Linear Algebra (Eigenvalues, Diagonalization, Euclidean Spaces)",
      "Real Analysis (Series, Integration, Differential Equations)",
      "Multivariable Calculus (Partial Derivatives, Gradient, Extrema Optimization)",
      "Probability Theory (Convergence, Density, Estimation, Confidence Intervals)",
      "Bilinear Algebra (Inner Products, Orthogonal Projection, Symmetric Reduction)",
      "Statistics, ML Mathematics",
    ],
  },
  {
    category: "Data & Engineering",
    icon: Database, color: "#7c3aed",
    items: ["Large-Scale Data Processing", "Feature Engineering & Data Mining", "Pipeline Automation / Web Scraping", "API Development (FastAPI, Flask)"],
  },
  {
    category: "Finance & Quantitative",
    icon: TrendingUp, color: "#6366f1",
    items: ["Quantitative Research & Trading Strategies", "Time Series Forecasting", "Advanced Derivatives & Pricing", "Portfolio Construction", "Risk Modeling & Financial Econometrics"],
  },
];

const projects = [
  { title: "Image Classification", subtitle: "Deep CNN with Transfer Learning", description: "Built a deep convolutional neural network architecture leveraging transfer learning image classification on complex datasets.", tags: ["CV"], stack: ["PyTorch", "ResNet", "Hugging Face", "PIL"], color: "#818cf8" },
  { title: "NLP Chatbot", subtitle: "Fine-Tuned Language Model", description: "Fine-tuned a large language model for conversational AI, implementing attention mechanisms and custom tokenization pipelines.", tags: ["NLP"], stack: ["Transformers", "Hugging Face", "PyTorch", "FastAPI"], color: "#a78bfa" },
  { title: "Financial Forecasting", subtitle: "LSTM-Based Prediction Model", description: "Designed an LSTM-based time series prediction model for financial market forecasting with backtesting framework.", tags: ["Finance", "NLP"], stack: ["Pytorch", "Pandas", "scikit-learn", "Plotly"], color: "#6366f1" },
  { title: "Medical Image Analysis", subtitle: "Computer Vision for Healthcare", description: "Applied computer vision techniques to medical imaging data, building classification models to assist clinical diagnosis workflows.", tags: ["CV", "MLOps"], stack: ["PyTorch", "MONAI", "scikit-image", "Docker"], color: "#8b5cf6" },
];

const timeline = [
  { year: "Jun – Aug 2025", title: "Market Analyst Intern — Data Scientist", org: "Soufflet Négoce by InVivo (InVivo Trading)", location: "Paris, France", description: "Developed ML model using 10+ years of commodity data to dynamically switch between momentum and mean-reversion strategies across 12 markets. Built real-time Power BI dashboards tracking 12 commodity markets and 10 custom performance indexes. Applied advanced feature engineering, cross-validation and data mining techniques.", type: "work" },
  { year: "Nov 2025", title: "1st Place — Hi!ckathon 2025", org: "IP Paris & HEC Paris", location: "Paris, France", description: "Won 48h data science hackathon (400 participants). Engineered a stacking ensemble (CatBoost, XGBoost, LightGBM) achieving R² = 0.82, 3% ahead of competition.", type: "achievement" },
  { year: "Aug 2024 – Present", title: "Data & IT Project Lead", org: "EDHEC Sailing Cup", location: "Lille, France", description: "Led development of event website & mobile app (top-ranked sports app on App Store). Deployed cashless payment & authentication system for 3,000+ participants across 22 nationalities. Implemented web scraping algorithms improving team productivity by 400%.", type: "work" },
  { year: "2024 – Present", title: "Master in Management — Finance Track (Grande École)", org: "EDHEC Business School", location: "Nice, France", description: "Coursework: Analysis, Advanced Derivatives, ML for Finance, Portfolio Construction Theory, Pricing Derivatives, Financial Econometrics with Python, Financial Analysis & Valuation.", type: "education" },
  { year: "2025", title: "Deep Learning Specialization", org: "Coursera — Andrew Ng", location: "Online", description: "Intensive study of neural networks, CNNs, sequence models, and optimization techniques. 5h/day dedicated practice.", type: "cert" },
  { year: "2025", title: "Neural Networks & Deep Learning", org: "Coursera", location: "Online", description: "Foundations of neural networks, forward/backward propagation, and practical implementation of deep architectures.", type: "cert" },
  { year: "2025", title: "Intro to Statistical Learning (Python)", org: "Gareth M. James, Daniela Witten, Trevor Hastie, Robert Tibshirani", location: "Book", description: "Statistical foundations for ML: regression, classification, resampling, tree-based methods, SVMs, and unsupervised learning.", type: "cert" },
  { year: "2021 – 2024", title: "Preparatory Classes (CPGE) — Maths Approfondies", org: "Lycée Fabert", location: "Metz, France", description: "Highly selective program for top French business schools. Achieved top ~2.5% nationally. Coursework: Advanced Mathematics, Linear Algebra, Real Analysis, Probability Theory, Geopolitics, Philosophy.", type: "education" },
];

const filterTags = ["All", "CV", "NLP", "MLOps", "Finance", "Math"];

// ─── COMPONENTS ──────────────────────────────────────────────────────────

function Navbar({ dark, setDark, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: dark ? (scrolled ? "rgba(10,10,20,0.85)" : "transparent") : (scrolled ? "rgba(255,255,255,0.85)" : "transparent"),
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${dark ? "rgba(139,92,246,0.1)" : "rgba(0,0,0,0.06)"}` : "none",
      transition: "all 0.4s ease", fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #6366f1, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>AH</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: dark ? "#f1f5f9" : "#0f172a" }}>armand hanen</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: "0.02em",
              color: activeSection === item.toLowerCase() ? "#8b5cf6" : dark ? "rgba(241,245,249,0.6)" : "rgba(15,23,42,0.5)",
              transition: "color 0.3s ease",
            }}
              onMouseEnter={(e) => e.target.style.color = "#8b5cf6"}
              onMouseLeave={(e) => { if (activeSection !== item.toLowerCase()) e.target.style.color = dark ? "rgba(241,245,249,0.6)" : "rgba(15,23,42,0.5)"; }}
            >{item}</a>
          ))}
          <button onClick={() => setDark(!dark)} style={{
            background: dark ? "rgba(139,92,246,0.1)" : "rgba(99,102,241,0.08)",
            border: `1px solid ${dark ? "rgba(139,92,246,0.2)" : "rgba(99,102,241,0.15)"}`,
            borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease",
          }}>
            {dark ? <Sun size={15} color="#a78bfa" /> : <Moon size={15} color="#6366f1" />}
          </button>
        </div>
        <div style={{ display: "none" }} className="mobile-nav-toggle">
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
            {mobileOpen ? <X size={22} color={dark ? "#f1f5f9" : "#0f172a"} /> : <Menu size={22} color={dark ? "#f1f5f9" : "#0f172a"} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{ position: "absolute", top: 64, left: 0, right: 0, background: dark ? "rgba(10,10,20,0.97)" : "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", padding: "16px 24px", borderBottom: `1px solid ${dark ? "rgba(139,92,246,0.15)" : "rgba(0,0,0,0.06)"}` }}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px 0", textDecoration: "none", fontSize: 15, fontWeight: 500, color: dark ? "rgba(241,245,249,0.8)" : "rgba(15,23,42,0.7)" }}>{item}</a>
          ))}
          <button onClick={() => { setDark(!dark); setMobileOpen(false); }} style={{ marginTop: 8, background: "none", border: "none", cursor: "pointer", fontSize: 14, color: dark ? "#a78bfa" : "#6366f1", fontWeight: 500 }}>
            {dark ? "☀ Light mode" : "🌙 Dark mode"}
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-nav-toggle { display: flex !important; } }
      `}</style>
    </nav>
  );
}

function HeroSection({ dark }) {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);
  const t = (d) => `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${d}s`;

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 24px 80px" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "10%", left: "15%", width: 500, height: 500, background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)", animation: "float 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(80px)", animation: "float 10s ease-in-out infinite 2s" }} />
        <div style={{ position: "absolute", top: "40%", right: "30%", width: 300, height: 300, background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)", animation: "float 6s ease-in-out infinite 1s" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${dark ? "rgba(139,92,246,0.03)" : "rgba(99,102,241,0.04)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(139,92,246,0.03)" : "rgba(99,102,241,0.04)"} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      </div>

      <div style={{ maxWidth: 900, textAlign: "center", position: "relative", zIndex: 2 }}>

        {/* ─── PROFILE PHOTO ─── */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
          transition: t(0),
          marginBottom: 28,
          display: "flex", justifyContent: "center",
        }}>
          <div style={{
            width: 120, height: 120, borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #a78bfa, #c084fc)",
            padding: 3, position: "relative",
          }}>
            {/* Glow ring */}
            <div style={{
              position: "absolute", inset: -6, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(167,139,250,0.2), rgba(192,132,252,0.3))",
              filter: "blur(12px)", opacity: 0.6,
            }} />
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: dark ? "#0a0a18" : "#fafbff",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", position: "relative",
            }}>
              {!imgError ? (
                <img
                  src={PROFILE_PHOTO_URL}
                  alt="Armand Hanen"
                  onError={() => setImgError(true)}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", borderRadius: "50%",
                  }}
                />
              ) : (
                <span style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: 36, letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>AH</span>
              )}
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: t(0.1), marginBottom: 28 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 100, background: dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)", border: `1px solid ${dark ? "rgba(139,92,246,0.15)" : "rgba(99,102,241,0.12)"}`, fontSize: 13, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", color: dark ? "#a78bfa" : "#6366f1" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "pulseGlow 2s ease-in-out infinite", boxShadow: "0 0 8px rgba(34,197,94,0.4)" }} />
            Open to ML/DL, Quant & other Data-oriented Market Finance opportunities
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.05, color: dark ? "#f1f5f9" : "#0f172a", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: t(0.2), letterSpacing: "-0.03em", marginBottom: 20 }}>
          Armand Hanen
        </h1>

        {/* Subtitle */}
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: 1.6, color: dark ? "rgba(241,245,249,0.5)" : "rgba(15,23,42,0.5)", maxWidth: 680, margin: "0 auto 16px", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: t(0.35) }}>
          EDHEC Finance
          <br />building expertise in{" "}
          <span style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 600 }}>
            Machine Learning & Deep Learning
          </span>
        </p>

        {/* Achievement highlights */}
        <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: t(0.45), marginBottom: 40, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", color: dark ? "rgba(241,245,249,0.4)" : "rgba(15,23,42,0.4)" }}>
            <Trophy size={14} color="#eab308" /> 1st Place — Hi!ckathon 2025
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", color: dark ? "rgba(241,245,249,0.4)" : "rgba(15,23,42,0.4)" }}>
            <Briefcase size={14} color="#8b5cf6" /> Intern Market Analyst & Data Scientist @ InVivo Trading
          </span>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)", transition: t(0.55) }}>
          <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 12, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: "0 4px 20px rgba(99,102,241,0.3)", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(99,102,241,0.4)"; }}
            onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(99,102,241,0.3)"; }}>
            View Projects <ArrowRight size={15} />
          </a>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 12, background: dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)", border: `1px solid ${dark ? "rgba(139,92,246,0.2)" : "rgba(99,102,241,0.15)"}`, color: dark ? "#c4b5fd" : "#6366f1", textDecoration: "none", fontSize: 14, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; }}>
            Get in Touch
          </a>
        </div>

        <div style={{ position: "absolute", bottom: -60, left: "50%", transform: "translateX(-50%)", opacity: mounted ? 0.4 : 0, transition: "opacity 1.5s ease 1s", animation: "float 3s ease-in-out infinite" }}>
          <ChevronDown size={20} color={dark ? "#a78bfa" : "#6366f1"} />
        </div>
      </div>
    </section>
  );
}

function AboutSection({ dark }) {
  const cardStyle = { padding: "20px 24px", borderRadius: 16, background: dark ? "rgba(139,92,246,0.04)" : "rgba(99,102,241,0.03)", border: `1px solid ${dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)"}`, display: "flex", alignItems: "center", gap: 14 };
  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}>
      <AnimatedSection>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: "#8b5cf6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>About</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, color: dark ? "#f1f5f9" : "#0f172a", marginBottom: 32, letterSpacing: "-0.02em" }}>
          From Preparatory Classes & Finance to{" "}
          <span style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Data Science & AI</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div style={{ padding: 32, borderRadius: 20, background: dark ? "rgba(139,92,246,0.04)" : "rgba(99,102,241,0.03)", border: `1px solid ${dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)"}`, marginBottom: 24 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: dark ? "rgba(241,245,249,0.7)" : "rgba(15,23,42,0.65)" }}>
            I'm a Master in Management (Finance Track) student at <strong style={{ color: dark ? "#c4b5fd" : "#6366f1", fontWeight: 600 }}>EDHEC Business School</strong>,
            coming from <strong style={{ color: dark ? "#c4b5fd" : "#6366f1", fontWeight: 600 }}>Economic Preparatory Classes - Advanced Maths Specialization (CPGE)</strong> at Lycée Fabert.
             This rigorous mathematical training — linear algebra, real analysis, probability theory... —
            gave me the foundations I now apply every day in data science & ai.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: dark ? "rgba(241,245,249,0.7)" : "rgba(15,23,42,0.65)", marginTop: 16 }}>
            My recent internship as <strong style={{ color: dark ? "#c4b5fd" : "#6366f1", fontWeight: 600 }}> Intern Market Analyst – Data Scientist at InVivo Trading</strong> confirmed
            my conviction: I built ML models on 10+ years of commodity data to optimize trading strategies across 12 markets.
            Now dedicating 5 hours daily to data science & AI, I'm combining my market finance expertise with hands-on
            engineering in ML/DL — targeting Data Scientist, ML Engineer, Quant roles, and market finance roles.
          </p>
        </div>
      </AnimatedSection>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
        {[
          { icon: MapPin, label: "Based in", value: "Nice, France" },
          { icon: GraduationCap, label: "School", value: "EDHEC — Grande École" },
          { icon: Trophy, label: "Hackathon", value: "1st — Hi!ckathon 2025" },
          { icon: Globe, label: "Languages", value: "FR · EN · DE" },
        ].map((item, i) => (
          <AnimatedSection key={i} delay={0.15 + i * 0.08}>
            <div style={cardStyle}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: dark ? "rgba(139,92,246,0.1)" : "rgba(99,102,241,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <item.icon size={18} color="#8b5cf6" />
              </div>
              <div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 500, color: dark ? "rgba(241,245,249,0.4)" : "rgba(15,23,42,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{item.label}</p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: dark ? "#e2e8f0" : "#1e293b", marginTop: 2 }}>{item.value}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function SkillsSection({ dark }) {
  const [activeSkill, setActiveSkill] = useState(0);
  return (
    <section id="skills" style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}>
      <AnimatedSection>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: "#8b5cf6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Skills</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, color: dark ? "#f1f5f9" : "#0f172a", marginBottom: 48, letterSpacing: "-0.02em" }}>Technical Arsenal</h2>
      </AnimatedSection>

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 24, alignItems: "start" }} className="skills-grid">
        <AnimatedSection delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {skills.map((s, i) => {
              const Icon = s.icon;
              const active = activeSkill === i;
              return (
                <button key={i} onClick={() => setActiveSkill(i)} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 12, border: "none", cursor: "pointer", textAlign: "left", width: "100%",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: active ? 600 : 400,
                  background: active ? (dark ? "rgba(139,92,246,0.1)" : "rgba(99,102,241,0.08)") : "transparent",
                  color: active ? (dark ? "#c4b5fd" : "#6366f1") : (dark ? "rgba(241,245,249,0.5)" : "rgba(15,23,42,0.45)"),
                  transition: "all 0.3s ease", position: "relative",
                }}>
                  {active && <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: 3, borderRadius: 2, background: "linear-gradient(135deg, #6366f1, #a78bfa)" }} />}
                  <Icon size={16} />
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.category}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div style={{ padding: 32, borderRadius: 20, background: dark ? "rgba(139,92,246,0.04)" : "rgba(99,102,241,0.03)", border: `1px solid ${dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)"}`, minHeight: 250 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              {(() => { const Icon = skills[activeSkill].icon; return <Icon size={20} color={skills[activeSkill].color} />; })()}
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: dark ? "#f1f5f9" : "#0f172a" }}>{skills[activeSkill].category}</h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {skills[activeSkill].items.map((item, j) => (
                <span key={`${activeSkill}-${j}`} style={{
                  padding: "10px 18px", borderRadius: 10,
                  background: dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)",
                  border: `1px solid ${dark ? "rgba(139,92,246,0.12)" : "rgba(99,102,241,0.1)"}`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 500,
                  color: dark ? "#c4b5fd" : "#4f46e5",
                  animation: `fadeInUp 0.4s ease ${j * 0.06}s both`,
                }}>{item}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
      <style>{`@media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function ProjectsSection({ dark }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState(null);
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <AnimatedSection>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: "#8b5cf6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Projects</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, color: dark ? "#f1f5f9" : "#0f172a", marginBottom: 32, letterSpacing: "-0.02em" }}>Selected Work</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {filterTags.map((tag) => (
            <button key={tag} onClick={() => setActiveFilter(tag)} style={{
              padding: "8px 18px", borderRadius: 10, border: activeFilter === tag ? "none" : `1px solid ${dark ? "rgba(139,92,246,0.1)" : "rgba(99,102,241,0.08)"}`, cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 500,
              background: activeFilter === tag ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : dark ? "rgba(139,92,246,0.06)" : "rgba(99,102,241,0.05)",
              color: activeFilter === tag ? "#fff" : dark ? "rgba(241,245,249,0.5)" : "rgba(15,23,42,0.45)",
              transition: "all 0.3s ease",
            }}>
              {tag === "All" && <Filter size={12} style={{ marginRight: 6, verticalAlign: -1 }} />}{tag}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {filtered.map((p, i) => (
          <AnimatedSection key={p.title} delay={0.1 + i * 0.08}>
            <div onMouseEnter={() => setHovered(p.title)} onMouseLeave={() => setHovered(null)} style={{
              borderRadius: 20, overflow: "hidden",
              background: dark ? "rgba(139,92,246,0.03)" : "rgba(99,102,241,0.02)",
              border: `1px solid ${hovered === p.title ? (dark ? "rgba(139,92,246,0.25)" : "rgba(99,102,241,0.2)") : (dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)")}`,
              transition: "all 0.4s ease", transform: hovered === p.title ? "translateY(-4px)" : "translateY(0)", cursor: "pointer",
            }}>
              <div style={{ height: 3, width: "100%", background: `linear-gradient(90deg, ${p.color}, ${p.color}88)`, opacity: hovered === p.title ? 1 : 0.3, transition: "opacity 0.4s ease" }} />
              <div style={{ padding: "28px 28px 24px" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ padding: "3px 10px", borderRadius: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 500, letterSpacing: "0.05em", background: dark ? "rgba(139,92,246,0.1)" : "rgba(99,102,241,0.07)", color: dark ? "#a78bfa" : "#6366f1" }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 19, color: dark ? "#f1f5f9" : "#0f172a", marginBottom: 4 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 500, color: p.color, marginBottom: 12 }}>{p.subtitle}</p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: dark ? "rgba(241,245,249,0.55)" : "rgba(15,23,42,0.5)", marginBottom: 20 }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.stack.map((tech) => (
                    <span key={tech} style={{ padding: "4px 10px", borderRadius: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 400, background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", color: dark ? "rgba(241,245,249,0.5)" : "rgba(15,23,42,0.45)" }}>{tech}</span>
                  ))}
                </div>
                <a href="https://github.com/armandhanen" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", color: dark ? "#a78bfa" : "#6366f1", textDecoration: "none", transition: "gap 0.3s ease",
                }} onMouseEnter={(e) => e.target.style.gap = "10px"} onMouseLeave={(e) => e.target.style.gap = "6px"}>
                  View on GitHub <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ dark }) {
  const cfg = {
    work: { icon: Briefcase, color: "#3b82f6", bg: "rgba(59,130,246," },
    achievement: { icon: Trophy, color: "#eab308", bg: "rgba(234,179,8," },
    education: { icon: GraduationCap, color: "#8b5cf6", bg: "rgba(139,92,246," },
    cert: { icon: Award, color: "#06b6d4", bg: "rgba(6,182,212," },
  };

  return (
    <section id="experience" style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}>
      <AnimatedSection>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: "#8b5cf6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Experience</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, color: dark ? "#f1f5f9" : "#0f172a", marginBottom: 48, letterSpacing: "-0.02em" }}>Journey & Certifications</h2>
      </AnimatedSection>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: dark ? "linear-gradient(180deg, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(6,182,212,0.1))" : "linear-gradient(180deg, rgba(59,130,246,0.25), rgba(99,102,241,0.15), rgba(6,182,212,0.05))", borderRadius: 1 }} />

        {timeline.map((item, i) => {
          const c = cfg[item.type];
          const Icon = c.icon;
          return (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <div style={{ display: "flex", gap: 24, marginBottom: 28, position: "relative" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  background: item.type === "achievement" ? "linear-gradient(135deg, #eab308, #f59e0b)" : `${c.bg}0.1)`,
                  border: `1px solid ${c.bg}0.25)`, zIndex: 2,
                }}>
                  <Icon size={16} color={item.type === "achievement" ? "#fff" : c.color} />
                </div>
                <div style={{
                  flex: 1, padding: "20px 24px", borderRadius: 16,
                  background: `${c.bg}${dark ? "0.03" : "0.02"})`,
                  border: `1px solid ${c.bg}${dark ? "0.1" : "0.08"})`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500, color: c.color, padding: "3px 10px", borderRadius: 6, background: `${c.bg}0.1)` }}>{item.year}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 500, color: dark ? "rgba(241,245,249,0.4)" : "rgba(15,23,42,0.4)" }}>{item.org}</span>
                    {item.location && (
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: dark ? "rgba(241,245,249,0.3)" : "rgba(15,23,42,0.3)", display: "inline-flex", alignItems: "center", gap: 3 }}>
                        <MapPin size={10} /> {item.location}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: dark ? "#f1f5f9" : "#0f172a", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: dark ? "rgba(241,245,249,0.55)" : "rgba(15,23,42,0.5)" }}>{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection({ dark }) {
  const links = [
    { icon: Mail, label: "armand.hanen@edhec.com", href: "mailto:armand.hanen@edhec.com", color: "#8b5cf6" },
    { icon: Github, label: "github.com/armandhanen", href: "https://github.com/armandhanen", color: "#a78bfa" },
    { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/armand-hanen-90786122b/", color: "#6366f1" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 24px 80px", maxWidth: 700, margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: "#8b5cf6", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2, color: dark ? "#f1f5f9" : "#0f172a", marginBottom: 16, letterSpacing: "-0.02em" }}>Let's Connect</h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, lineHeight: 1.7, color: dark ? "rgba(241,245,249,0.5)" : "rgba(15,23,42,0.45)", maxWidth: 480, margin: "0 auto 40px" }}>
            Interested in discussing ML/DL, quant research, or collaborative projects? I'd love to hear from you.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 420, margin: "0 auto" }}>
          {links.map((link, i) => (
            <a key={i} href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 14, padding: "16px 24px", borderRadius: 14,
                background: dark ? "rgba(139,92,246,0.04)" : "rgba(99,102,241,0.03)",
                border: `1px solid ${dark ? "rgba(139,92,246,0.1)" : "rgba(99,102,241,0.08)"}`,
                textDecoration: "none", transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = dark ? "rgba(139,92,246,0.08)" : "rgba(99,102,241,0.06)"; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = dark ? "rgba(139,92,246,0.04)" : "rgba(99,102,241,0.03)"; e.currentTarget.style.transform = "translateX(0)"; }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: dark ? "rgba(139,92,246,0.1)" : "rgba(99,102,241,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <link.icon size={17} color={link.color} />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 500, color: dark ? "rgba(241,245,249,0.7)" : "rgba(15,23,42,0.6)" }}>{link.label}</span>
              <ExternalLink size={14} color={dark ? "rgba(241,245,249,0.3)" : "rgba(15,23,42,0.25)"} style={{ marginLeft: "auto" }} />
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: dark ? "linear-gradient(180deg, #06060f 0%, #0a0a18 40%, #080815 100%)" : "linear-gradient(180deg, #fafbff 0%, #f5f3ff 40%, #fafbff 100%)",
      color: dark ? "#f1f5f9" : "#0f172a",
      transition: "background 0.5s ease, color 0.5s ease",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <style>{FONTS_CSS}</style>
      <Navbar dark={dark} setDark={setDark} activeSection={activeSection} />
      <HeroSection dark={dark} />
      <AboutSection dark={dark} />
      <SkillsSection dark={dark} />
      <ProjectsSection dark={dark} />
      <ExperienceSection dark={dark} />
      <ContactSection dark={dark} />
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${dark ? "rgba(139,92,246,0.06)" : "rgba(99,102,241,0.05)"}` }}>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: dark ? "rgba(241,245,249,0.3)" : "rgba(15,23,42,0.3)" }}>© 2025 Armand Hanen — Built with React & passion for ML</p>
      </footer>
    </div>
  );
}
