"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  ChevronRight,
  Rocket,
  Target,
  Users,
  DollarSign,
  Twitter,
  Menu,
  X,
  ExternalLink,
  Mountain,
  Globe,
} from "lucide-react"

const content = {
  en: {
    nav: {
      home: "Home",
      projects: "Experience",
      experience: "Projects",
      contact: "Contact",
    },
    hero: {
      location: "Argentina",
      building: "Building",
      greeting: "Hey, I'm Pedro Salomone!",
      role: "Data Scientist & Product Developer",
      description:
        "Applied Mathematics student with hands-on experience in machine learning, product development, and sales. I combine strong mathematical foundations with practical development skills, having built multiple SaaS applications using modern AI-assisted tools and worked on cutting-edge AI projects from legal document automation to algorithmic trading systems. My goal is to leverage data science and AI to solve complex business problems.",
    },
    sections: {
      journey: "My Journey",
      journeyDesc: "Previous work experiences",
      projects: "Projects",
      projectsDesc:
        "Things I've Built - A collection of projects spanning AI, machine learning, product development and SaaS applications.",
      education: "Education",
      contact: "Ready to build something epic?",
      contactDesc:
        "Always open to collaborate on innovative projects, connect with people, or simply chat about startups and technology.",
    },
    projects: {
      viewDetails: "View details",
      status: {
        mvp: "MVP launched",
        closed: "Closed",
        research: "Research Phase",
        awaiting: "Research Complete - Awaiting Expert Validation",
        development: "In Development - Thesis Project",
      },
    },
    footer: "Built with v0 by Vercel.",
    education: {
      degree: "Bachelor's Degree in Applied Mathematics",
      university: "Universidad Nacional de Córdoba • 2021-Present",
      description: "Comprehensive mathematical foundation with specialized focus on data science, computer science, and artificial intelligence. Core curriculum included: Advanced Algorithms & Data Structures, Neural Networks & Deep Learning, Differential Equations, Probability & Statistics, Bayesian Theory, Numerical Analysis, Algorithm Design & Complexity Theory, Operations Research, Mathematical Modeling, Quantitative Finance, Machine Learning, and Computational Simulation & Modeling."
    },
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Experiencia",
      experience: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      location: "Argentina",
      building: "Construyendo",
      greeting: "¡Hola, soy Pedro Salomone!",
      role: "Científico de Datos y Desarrollador de Productos",
      description:
        "Estudiante de Matemática Aplicada con experiencia práctica en aprendizaje automático, desarrollo de productos y ventas. Combino sólidos fundamentos matemáticos con habilidades de desarrollo prácticas, habiendo construido múltiples aplicaciones SaaS usando herramientas modernas asistidas por IA y trabajado en proyectos de IA de vanguardia desde automatización de documentos legales hasta sistemas de trading algorítmico. Mi objetivo es aprovechar la ciencia de datos y la IA para resolver problemas empresariales complejos.",
    },
    sections: {
      journey: "Mi Trayectoria",
      journeyDesc: "Experiencias laborales previas",
      projects: "Proyectos",
      projectsDesc:
        "Cosas que he construido - Una colección de proyectos que abarcan IA, aprendizaje automático, desarrollo de productos y aplicaciones SaaS.",
      education: "Educación",
      contact: "¿Listo para construir algo épico?",
      contactDesc:
        "Siempre abierto a colaborar en proyectos innovadores, conectar con personas, o simplemente charlar sobre startups y tecnología.",
    },
    projects: {
      viewDetails: "Ver detalles",
      status: {
        mvp: "MVP lanzado",
        closed: "Cerrado",
        research: "Fase de Investigación",
        awaiting: "Investigación Completa - Esperando Validación de Expertos",
        development: "En Desarrollo - Proyecto de Tesis",
      },
    },
    footer: "Construido con v0 by Vercel.",
    education: {
      degree: "Licenciatura en Matemática Aplicada",
      university: "Universidad Nacional de Córdoba • 2021-Presente",
      description: "Fundación matemática integral con enfoque especializado en ciencia de datos, ciencias de la computación e inteligencia artificial. El plan de estudios incluyó: Algoritmos Avanzados y Estructuras de Datos, Redes Neuronales y Deep Learning, Ecuaciones Diferenciales, Probabilidad y Estadística, Teoría Bayesiana, Análisis Numérico, Diseño de Algoritmos y Teoría de Complejidad, Investigación de Operaciones, Modelado Matemático, Finanzas Cuantitativas, Machine Learning, y Simulación y Modelado Computacional."
    },
  },
}

export default function IndieHackerPortfolio() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [isScrolled, setIsScrolled] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const t = content[language]

  const currentProjects = {
  en: [
    {
      title: "Outsiders",
      description: "Progress tracking app for professional snowboarders",
      status: t.projects.status.mvp,
      objective: "Help athletes and coaches track training progress and performance metrics",
      users: "Beta tested with a small team of professional snowboarders and their coach, gathering feedback on usability and feature requirements",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Lugarcito",
      description: "Co-founded carpooling platform solving transportation challenges in Central and Southeast Córdoba Province, Argentina",
      status: t.projects.status.closed,
      objective: "Connect drivers and passengers to reduce transportation costs and improve mobility access in underserved areas",
      users: "Built from scratch: database architecture, matching algorithms, and route optimization using graph theory for maximum efficiency. Led social media marketing, creating content and editing promotional videos",
      icon: Rocket,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Stock Trading Robots",
      description: "Built intelligent algorithmic trading systems using advanced machine learning techniques",
      status: t.projects.status.research,
      objective: "Develop automated trading strategies through reinforcement learning and time series forecasting models",
      users: "Successfully outperformed market benchmarks in backtesting across multiple approaches, including Proximal Policy Optimization (PPO) and Dynamic Mode Decomposition (DMD)",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "AI Legal Document Summarization",
      description: "Built an automated system for generating judicial case summaries using Large Language Models for Córdoba Provincial Courts",
      status: t.projects.status.awaiting,
      objective: "Automate metadata extraction and synopsis generation from legal documents to reduce manual workload for legal professionals",
      users: "Developed advanced prompting techniques (Chain of Thought, Few-Shot) and implemented quantization for efficient processing on limited hardware. Successfully processed complex legal texts without hallucinations using Llama-3.2-11B-Vision-Instruct model",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "AI Recommendation System for E-commerce Sellers",
      description: "Developing advanced recommendation system using Reinforcement Learning and Transformers to suggest actionable strategies for e-commerce sellers (ongoing thesis project)",
      status: t.projects.status.development,
      objective: "Design RL-based system that suggests strategic actions to sellers (pricing, advertising, promotions) optimizing long-term business metrics rather than immediate recommendations",
      users: "Currently working with MercadoLibre's ($MELI) ML Technical Leader. Implementing Decision Transformer and variants (RLT4Rec, Retentive DT) with offline RL techniques. Comparing against traditional baselines (GRU4Rec, SASRec, BERT4Rec) using real e-commerce data",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ],
  es: [
    {
      title: "Outsiders",
      description: "App de seguimiento de progreso para snowboarders profesionales",
      status: t.projects.status.mvp,
      objective: "Ayudar a atletas y entrenadores a seguir el progreso de entrenamiento y métricas de rendimiento",
      users: "Probado en beta con un pequeño equipo de snowboarders profesionales y su entrenador, recopilando feedback sobre usabilidad y requisitos de funcionalidades",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Lugarcito",
      description: "Co-fundé plataforma de carpooling que resuelve desafíos de transporte en la Provincia Central y Sureste de Córdoba, Argentina",
      status: t.projects.status.closed,
      objective: "Conectar conductores y pasajeros para reducir costos de transporte y mejorar el acceso a movilidad en áreas desatendidas",
      users: "Construido desde cero: arquitectura de base de datos, algoritmos de emparejamiento y optimización de rutas usando teoría de grafos para máxima eficiencia. Lideré marketing en redes sociales, creando contenido y editando videos promocionales",
      icon: Rocket,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Robots de Trading de Acciones",
      description: "Construí sistemas de trading algorítmico inteligentes usando técnicas avanzadas de machine learning",
      status: t.projects.status.research,
      objective: "Desarrollar estrategias de trading automatizadas a través de aprendizaje por refuerzo y modelos de pronóstico de series temporales",
      users: "Superé exitosamente los benchmarks del mercado en backtesting a través de múltiples enfoques, incluyendo Optimización de Política Proximal (PPO) y Descomposición de Modo Dinámico (DMD)",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Resumen Automático de Documentos Legales con IA",
      description: "Construí un sistema automatizado para generar resúmenes de casos judiciales usando Modelos de Lenguaje Grandes para los Tribunales Provinciales de Córdoba",
      status: t.projects.status.awaiting,
      objective: "Automatizar la extracción de metadatos y generación de sinopsis de documentos legales para reducir la carga de trabajo manual de profesionales legales",
      users: "Desarrollé técnicas avanzadas de prompting (Chain of Thought, Few-Shot) e implementé cuantización para procesamiento eficiente en hardware limitado. Procesé exitosamente textos legales complejos sin alucinaciones usando el modelo Llama-3.2-11B-Vision-Instruct",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Sistema de Recomendaciones de IA para Vendedores de E-commerce",
      description: "Desarrollando sistema avanzado de recomendaciones usando Aprendizaje por Refuerzo y Transformers para sugerir estrategias accionables a vendedores de e-commerce (proyecto de tesis en curso)",
      status: t.projects.status.development,
      objective: "Diseñar sistema basado en RL que sugiera acciones estratégicas a vendedores (precios, publicidad, promociones) optimizando métricas de negocio a largo plazo en lugar de recomendaciones inmediatas",
      users: "Actualmente trabajando con el Líder Técnico de ML de MercadoLibre ($MELI). Implementando Decision Transformer y variantes (RLT4Rec, Retentive DT) con técnicas de RL offline. Comparando contra baselines tradicionales (GRU4Rec, SASRec, BERT4Rec) usando datos reales de e-commerce",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]
  }

  const experience = {
  en: [
    {
      role: "Data Scientist",
      company: "Lightstorm.ai",
      period: "2024",
      location: "Madrid, Spain (Remote)",
      achievements: [
        "Developed an internal library following software engineering best practices",
        "Built a data-driven solution from scratch to address a critical startup problem",
        "Applied both software engineering and data science skills in real-world projects",
      ],
      icon: Rocket,
      color: "text-primary",
    },
    {
      role: "Product Developer & Entrepreneur",
      company: "Independent Projects",
      period: "2025",
      location: "Córdoba, Argentina",
      achievements: [
        "Conducted market research and user validation for multiple SaaS concepts",
        "Built functional web applications using AI-assisted development tools (v0) with database integration",
        "Implemented user authentication systems and API integrations using modern stack (Supabase, Google OAuth)",
        "Engaged in end-to-end product development from ideation to customer discovery and go-to-market strategies",
        "Demonstrated technical adaptability by rapidly learning and applying new technologies to solve product needs",
      ],
      icon: Rocket,
      color: "text-primary",
    },
    {
      role: "Snowboard and Ski Instructor",
      company: "Windham Mountain Club",
      period: "2 seasons",
      location: "New York State, USA",
      achievements: [
        "Taught snowboarding and ski to diverse groups in English, adapting communication style to different skill levels",
        "Developed strong interpersonal and leadership skills in high-pressure, safety-critical environments",
        "Demonstrated cultural adaptability and independence working internationally",
      ],
      icon: Mountain,
      color: "text-primary",
    },
  ],
  es: [
    {
      role: "Científico de Datos",
      company: "Lightstorm.ai",
      period: "2024",
      location: "Madrid, España (Remoto)",
      achievements: [
        "Desarrollé una librería interna siguiendo las mejores prácticas de ingeniería de software",
        "Construí una solución basada en datos desde cero para abordar un problema crítico de la startup",
        "Apliqué tanto habilidades de ingeniería de software como de ciencia de datos en proyectos del mundo real",
      ],
      icon: Rocket,
      color: "text-primary",
    },
    {
      role: "Desarrollador de Productos y Emprendedor",
      company: "Proyectos Independientes",
      period: "2025",
      location: "Córdoba, Argentina",
      achievements: [
        "Conduje investigación de mercado y validación de usuarios para múltiples conceptos SaaS",
        "Construí aplicaciones web funcionales usando herramientas de desarrollo asistidas por IA (v0) con integración de base de datos",
        "Implementé sistemas de autenticación de usuarios e integraciones de API usando stack moderno (Supabase, Google OAuth)",
        "Me involucré en desarrollo de productos end-to-end desde ideación hasta descubrimiento de clientes y estrategias de go-to-market",
        "Demostré adaptabilidad técnica aprendiendo y aplicando rápidamente nuevas tecnologías para resolver necesidades de productos",
      ],
      icon: Rocket,
      color: "text-primary",
    },
    {
      role: "Instructor de Snowboard y Esquí",
      company: "Windham Mountain Club",
      period: "2 temporadas",
      location: "Estado de Nueva York, EE.UU.",
      achievements: [
        "Enseñé snowboard y esquí a grupos diversos en inglés, adaptando el estilo de comunicación a diferentes niveles de habilidad",
        "Desarrollé fuertes habilidades interpersonales y de liderazgo en entornos de alta presión y críticos para la seguridad",
        "Demostré adaptabilidad cultural e independencia trabajando internacionalmente",
      ],
      icon: Mountain,
      color: "text-primary",
    },
  ]
  }

  const useStaggeredAnimation = (itemCount: number) => {
    const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set())

    useEffect(() => {
      const timer = setTimeout(() => {
        for (let i = 0; i < itemCount; i++) {
          setTimeout(() => {
            setAnimatedItems((prev) => new Set([...prev, i]))
          }, i * 150)
        }
      }, 300)

      return () => clearTimeout(timer)
    }, [itemCount])

    return animatedItems
  }

  const animatedCurrentProjects = useStaggeredAnimation(currentProjects.en.length)


  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const newVisibleSections = new Set(visibleSections)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            newVisibleSections.add(entry.target.id)
            setActiveSection(entry.target.id)
          } else {
            newVisibleSections.delete(entry.target.id)
          }
        })
        setVisibleSections(newVisibleSections)
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observerRef.current?.disconnect()
    }
  }, [])

  const [typedText, setTypedText] = useState("")
  const fullText = t.hero.role

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-primary/20 shadow-lg transition-all duration-300 ${
          isScrolled ? "bg-background/10 backdrop-blur-lg" : "bg-background/10 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-lg text-primary hover:text-primary/80 transition-colors cursor-pointer">
              Pedro Salomone
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {[
                { name: t.nav.home, id: "hero" },
                { name: t.nav.projects, id: "projects" },
                { name: t.nav.experience, id: "experience" },
                { name: t.nav.contact, id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                    activeSection === item.id ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-sm font-medium"
                title={language === "en" ? "Cambiar a Español" : "Switch to English"}
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-bold">{language === "en" ? "ES" : "EN"}</span>
              </button>
            </div>
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-primary/20 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-3 pt-4">
                {[
                  { name: t.nav.home, id: "hero" },
                  { name: t.nav.projects, id: "projects" },
                  { name: t.nav.experience, id: "experience" },
                  { name: t.nav.contact, id: "contact" },
                ].map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 text-left hover:bg-primary/10 ${
                      activeSection === item.id ? "text-primary bg-primary/5" : "text-foreground"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-sm font-medium text-left"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === "en" ? "Cambiar a Español" : "Switch to English"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {/* Mobile Header */}
        <div className="md:hidden bg-background border-b border-primary/20 p-4 sm:p-6">
          <div
            className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{t.hero.location}</span>
                <div className="relative">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-ping opacity-75"></div>
                </div>
                <span>{t.hero.building}</span>
              </div>

              <h1 className="font-heading font-bold text-xl text-balance">
                {t.hero.greeting.split("Pedro Salomone")[0]}
                <span className="text-primary">Pedro Salomone!</span>
              </h1>

              <p className="text-base text-secondary font-medium min-h-[24px]">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-sm text-foreground leading-relaxed max-w-md mx-auto">{t.hero.description}</p>
            </div>

            <div className="relative gaming-float flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
              <Avatar className="relative w-24 h-24 border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-300">
                <AvatarImage src="/profile-picture.jpg" />
                <AvatarFallback className="text-xl font-heading font-bold bg-card text-primary">PS</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex justify-center space-x-3">
              {[
                { icon: Mail, color: "primary", href: "pedrosalomonee@gmail.com.com" },
                { icon: Github, color: "secondary", href: "https://github.com/SalomoneCro" },
                { icon: Linkedin, color: "accent", href: "https://www.linkedin.com/in/pedrosalomone/" },
                { icon: Twitter, color: "blue-500", href: "https://x.com/Indie_P_" },
              ].map((social, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className={`w-10 h-10 p-0 border-${social.color} text-${social.color} hover:bg-${social.color} hover:text-white bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex min-h-screen">
          {/* Fixed Sidebar */}
          <div className="fixed left-0 top-16 w-1/3 h-[calc(100vh-4rem)] overflow-y-auto bg-background border-r border-primary/20 p-6">
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{t.hero.location}</span>
                  <div className="relative">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span>{t.hero.building}</span>
                </div>

                <h1 className="font-heading font-bold text-xl text-balance">
                  {t.hero.greeting.split("Pedro Salomone")[0]}
                  <span className="text-primary">Pedro Salomone!</span>
                </h1>

                <p className="text-base text-secondary font-medium min-h-[24px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>

                <p className="text-sm text-foreground leading-relaxed max-w-md mx-auto">{t.hero.description}</p>
              </div>

              <div className="relative gaming-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-3xl animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
                <Avatar className="relative w-32 h-32 mx-auto border-4 border-primary shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                  <AvatarImage src="/profile-picture.jpg" />
                  <AvatarFallback className="text-2xl font-heading font-bold bg-card text-primary">PS</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex justify-center space-x-3">
                {[
                  { icon: Mail, color: "primary", href: "pedrosalomonee@gmail.com.com" },
                  { icon: Github, color: "secondary", href: "https://github.com/SalomoneCro" },
                  { icon: Linkedin, color: "accent", href: "https://www.linkedin.com/in/pedrosalomone/" },
                  { icon: Twitter, color: "blue-500", href: "https://x.com/Indie_P_" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    className={`w-10 h-10 p-0 border-${social.color} text-${social.color} hover:bg-${social.color} hover:text-white bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg group relative`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    title={social.href}
                  >
                    <social.icon className="w-4 h-4" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background border border-primary/20 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {social.href}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="ml-[33.333333%] w-2/3 min-h-screen">
            <section id="experience" className="py-12 px-6">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-accent">{t.sections.journey}</h2>
                <p className="text-base text-foreground">{t.sections.journeyDesc}</p>
              </div>
              <div className="space-y-6">
                {experience[language].map((job, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <job.icon className={`w-8 h-8 ${job.color}`} />
                          <div>
                            <CardTitle className={`font-heading text-xl group-hover:${job.color} transition-colors`}>
                              {job.role}
                            </CardTitle>
                            <CardDescription className="text-base font-medium mt-1 text-foreground/80">
                              {job.company} • {job.location}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary" className="font-medium">
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <ChevronRight className={`w-4 h-4 ${job.color} mt-0.5 flex-shrink-0`} />
                            <span className="text-foreground/90">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="projects" className="py-8 px-6">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-primary">{t.sections.projects}</h2>
                <p className="text-base text-foreground">{t.sections.projectsDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {currentProjects[language].map((project, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/50 border-2 cursor-pointer overflow-hidden ${
                      animatedCurrentProjects.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CardHeader className={`${project.bgColor} transition-all duration-300 relative`}>
                      <div className="flex items-center justify-between">
                        <project.icon
                          className={`w-6 h-6 ${project.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <Badge
                          variant="outline"
                          className={`${project.color} border-current text-xs hover:bg-current hover:text-background transition-colors`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className={`font-heading text-lg group-hover:${project.color} transition-colors`}>
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/80 text-sm">{project.description}</CardDescription>

                      <div className="mt-3"></div>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-4">
                      <div className="space-y-2">
                        <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                          <DollarSign className="w-3 h-3" />
                          <span>{project.objective}</span>
                        </div>
                        <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                          <Users className="w-3 h-3" />
                          <span>{project.users}</span>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        variant="ghost"
                        className={`w-full mt-3 ${project.color} hover:bg-current hover:text-background opacity-0 group-hover:opacity-100 transition-all duration-300`}
                      >
                        {t.projects.viewDetails}
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="education" className="py-12 px-6 bg-card/30">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-accent">{t.sections.education}</h2>
              </div>

              <Card className="hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    <div>
                      <CardTitle className="font-heading text-base">{t.education.degree}</CardTitle>
                      <CardDescription className="text-sm font-medium mt-1 text-foreground/80">
                        {t.education.university}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">
                    {t.education.description}
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="contact" className="py-12 px-6">
              <div className="text-center">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-primary">{t.sections.contact}</h2>
                <p className="text-base text-foreground mb-6">{t.sections.contactDesc}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="font-medium border-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    pedrosalomonee@gmail.com
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </section>

            <footer className="py-6 px-6 border-t border-primary/20 bg-background">
              <div className="text-center text-foreground/60">
                <p>&copy; 2025 Pedro Salomone. {t.footer}</p>
              </div>
            </footer>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="md:hidden">
          <section id="projects" className="py-6 px-4">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-xl mb-2 text-primary">{t.sections.projects}</h2>
              <p className="text-sm text-foreground">{t.sections.projectsDesc}</p>
            </div>

            <div className="space-y-4">
              {currentProjects[language].map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 border-2 cursor-pointer"
                >
                  <CardHeader className={`${project.bgColor} transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <project.icon className={`w-5 h-5 ${project.color}`} />
                      <Badge variant="outline" className={`${project.color} border-current text-xs`}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className={`font-heading text-base group-hover:${project.color} transition-colors`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/80 text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-4">
                    <div className="space-y-2">
                      <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                        <DollarSign className="w-3 h-3" />
                        <span>{project.objective}</span>
                      </div>
                      <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                        <Users className="w-3 h-3" />
                        <span>{project.users}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="experience" className="py-8 px-4">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-xl mb-2 text-accent">{t.sections.journey}</h2>
              <p className="text-sm text-foreground">{t.sections.journeyDesc}</p>
            </div>

            <div className="space-y-4">
              {experience[language].map((job, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2">
                  <CardHeader>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <job.icon className={`w-6 h-6 ${job.color}`} />
                        <div className="flex-1">
                          <CardTitle className={`font-heading text-base group-hover:${job.color} transition-colors`}>
                            {job.role}
                          </CardTitle>
                          <CardDescription className="text-sm font-medium mt-1 text-foreground/80">
                            {job.company} • {job.location}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="font-medium text-xs w-fit">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <ChevronRight className={`w-3 h-3 ${job.color} mt-1 flex-shrink-0`} />
                          <span className="text-sm text-foreground/90">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="education" className="py-8 px-4 bg-card/30">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-xl mb-2 text-accent">{t.sections.education}</h2>
            </div>

            <Card className="hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <div>
                    <CardTitle className="font-heading text-base">Bachelor's Degree in Applied Mathematics</CardTitle>
                    <CardDescription className="text-sm font-medium mt-1 text-foreground/80">
                      Universidad Nacional de Córdoba • 2021-Present
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">
                  Comprehensive mathematical foundation with specialized focus on data science, computer science, and
                  artificial intelligence. Core curriculum included: Advanced Algorithms & Data Structures, Neural
                  Networks & Deep Learning, Differential Equations, Probability & Statistics, Bayesian Theory, Numerical
                  Analysis, Algorithm Design & Complexity Theory, Operations Research, Mathematical Modeling,
                  Quantitative Finance, Machine Learning, and Computational Simulation & Modeling.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="contact" className="py-8 px-4">
            <div className="text-center">
              <h2 className="font-heading font-bold text-xl mb-3 text-primary">{t.sections.contact}</h2>
              <p className="text-sm text-foreground mb-6">{t.sections.contactDesc}</p>
              <div className="flex flex-col gap-3">
                <Button
                  size="default"
                  className="font-medium border-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  pedrosalomonee@gmail.com
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </section>

          <footer className="py-6 px-4 border-t border-primary/20 bg-background">
            <div className="text-center text-foreground/60">
              <p className="text-sm">&copy; 2025 Pedro Salomone. {t.footer}</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
