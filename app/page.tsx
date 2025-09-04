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
  Code,
  GraduationCap,
  ChevronRight,
  Rocket,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Twitter,
  Menu,
  X,
  ExternalLink,
  Clock,
  Mountain,
} from "lucide-react"

export default function IndieHackerPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const currentProjects = [
    {
      title: "Outsiders",
      description: "App de seguimiento de progreso de Snowboarders profesionales",
      status: "MVP lanzado",
      Objective: "Explotar rendimiento de atletas extremos basandose en datos",
      users: "Beta con un equipo de 5 profesionales y su coach",
      icon: Mountain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "CanchaYa",
      description: "App de gestion de canchas de basquet",
      status: "Validando idea",
      Objective: "Tener una plataforma que centraliza todos los turnos y canchas de basquet de la ciudad de Córdoba",
      users: "0 usuarios",
      icon: Rocket,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const previousProjects = [
    {
      title: "Data Scientist trainee",
      description: "Trabajé en una startup especializada en inversiones usando inteligencia artificial",
      outcome: "Aprendi a trabajar en una organización",
      icon: Target,
      color: "text-primary",
      year: "2024",
    },
    {
      title: "Snowboard Instructor",
      description: "Trabajé como instrucor de snowboard en Windham, Nueva York",
      outcome: "Me divertí como nunca!",
      metrics: "+100 alumnos",
      icon: Mountain,
      color: "text-secondary",
      year: "2022-2025",
    },
  ]

  const experience = [
    {
      role: "Indie Hacker & Product Builder",
      company: "Proyectos Propios",
      period: "2022 - Presente",
      location: "Madrid, España (Remoto)",
      achievements: [
        "Construí y lancé 5 productos SaaS, 2 con ingresos recurrentes",
        "Generé €25K+ en ingresos totales de productos digitales",
        "Crecí audiencia en Twitter a 3K+ seguidores en nicho tech",
        "Validé 10+ ideas de producto usando técnicas lean startup",
      ],
      icon: Rocket,
      color: "text-primary",
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Clientes Diversos",
      period: "2020 - 2022",
      location: "España",
      achievements: [
        "Desarrollé 15+ MVPs para startups en fase temprana",
        "Ayudé a 3 startups a conseguir financiación seed (€500K+ total)",
        "Especialización en desarrollo rápido de prototipos",
        "Rate promedio: €75/hora con 98% satisfacción cliente",
      ],
      icon: Code,
      color: "text-secondary",
    },
  ]

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

  const animatedCurrentProjects = useStaggeredAnimation(currentProjects.length)
  const animatedPreviousProjects = useStaggeredAnimation(previousProjects.length)

  useEffect(() => {
    setIsVisible(true)

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
      observerRef.current?.disconnect()
    }
  }, [])

  const [typedText, setTypedText] = useState("")
  const fullText = "Estudiante y Emprendedor"

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
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-lg text-primary hover:text-primary/80 transition-colors cursor-pointer">
              IndieHacker.dev
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {[
                { name: "Inicio", id: "hero" },
                { name: "Proyectos", id: "projects" },
                { name: "Experiencia", id: "experience" },
                { name: "Contacto", id: "contact" },
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
                  { name: "Inicio", id: "hero" },
                  { name: "Proyectos", id: "projects" },
                  { name: "Experiencia", id: "experience" },
                  { name: "Contacto", id: "contact" },
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
                <span>Argentina</span>
                <div className="relative">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-ping opacity-75"></div>
                </div>
                <span>Construyendo</span>
              </div>

              <h1 className="font-heading font-bold text-xl text-balance">
                Hola, soy <span className="text-primary">Pedro Salomone!</span>
              </h1>

              <p className="text-base text-secondary font-medium min-h-[24px]">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-sm text-foreground leading-relaxed max-w-md mx-auto">
                Siempre que emprendí online fracasé. 
                A cuántos fracasos estaré de mi primer éxito? 
              </p>
            </div>

            <div className="relative gaming-float flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
              <Avatar className="relative w-24 h-24 border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-300">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback className="text-xl font-heading font-bold bg-card text-primary">AR</AvatarFallback>
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
                  <span>Argentina</span>
                  <div className="relative">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span>Construyendo</span>
                </div>

                <h1 className="font-heading font-bold text-2xl lg:text-3xl text-balance">
                  Hola, soy <span className="text-primary hover:text-primary/80 transition-colors">Pedro Salomone!</span>
                </h1>

                <p className="text-lg text-secondary font-medium min-h-[28px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>

                <p className="text-sm text-foreground leading-relaxed">
                  Siempre que emprendí online fracasé. 
                  A cuántos fracasos estaré de mi primer éxito? 
                </p>
              </div>

              <div className="relative gaming-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-3xl animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
                <Avatar className="relative w-32 h-32 mx-auto border-4 border-primary shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl font-heading font-bold bg-card text-primary">AR</AvatarFallback>
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
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background border border-primary/20 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {social.label}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="ml-[33.333333%] w-2/3 min-h-screen">
            <section id="projects" className="py-8 px-6">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-primary">Proyectos Actuales</h2>
                <p className="text-base text-foreground">Startups en las que estoy trabajando actualmente</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
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

                      <div className="mt-3">
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-4">
                      <div className="space-y-2">
                        <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                          <DollarSign className="w-3 h-3" />
                          <span>{project.Objective}</span>
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
                        Ver detalles
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="py-12 px-6 bg-card/30">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-secondary">
                  Experiencias Profesionales
                </h2>
                <p className="text-base text-foreground">
                  Experiencias pasadas que moldearon mi camino
                </p>
              </div>

              <div className="grid gap-6">
                {previousProjects.map((project, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl transition-all duration-500 border-2 overflow-hidden ${
                      animatedPreviousProjects.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <project.icon
                          className={`w-6 h-6 ${project.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <div>
                          <CardTitle className={`font-heading group-hover:${project.color} transition-colors`}>
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-foreground/80">{project.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className={`text-sm font-medium ${project.color}`}>{project.outcome}</div>
                        <div className="text-sm text-muted-foreground">
                          {project.metrics} • {project.year}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="experience" className="py-12 px-6">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-accent">Mi Journey</h2>
                <p className="text-base text-foreground">
                  Cómo evolucione de desarrollador a indie hacker y constructor de productos
                </p>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
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

            <section id="education" className="py-12 px-6 bg-card/30">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-accent">Formación</h2>
              </div>

              <Card className="hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="font-heading text-xl">Licenciatura en Matemática Aplicada</CardTitle>
                      <CardDescription className="text-base font-medium mt-1 text-foreground/80">
                        Universidad Nacional de Córdoba • 2021-Presente
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-foreground/80">
                    Especialización en Estadística, Matemática e Inteligencia Arificial
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="contact" className="py-12 px-6">
              <div className="text-center">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 text-primary">
                  ¿Listo para construir algo épico?
                </h2>
                <p className="text-base text-foreground mb-6">
                  Siempre abierto a colaborar en proyectos innovadores, conectar con personas, o simplemente charlar
                  sobre startups y tecnología.
                </p>
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
                    Conectar en LinkedIn
                  </Button>
                </div>
              </div>
            </section>

            <footer className="py-6 px-6 border-t border-primary/20 bg-background">
              <div className="text-center text-foreground/60">
                <p>&copy; 2025 Pedro Salomone. Construido con v0 by Vercel.</p>
              </div>
            </footer>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="md:hidden">
          <section id="projects" className="py-6 px-4">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-xl mb-2 text-primary">Proyectos Actuales</h2>
              <p className="text-sm text-foreground">Startups en las que estoy trabajando actualmente</p>
            </div>

            <div className="space-y-4">
              {currentProjects.map((project, index) => (
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
                    <div className="space-y-1">
                      <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                        <DollarSign className="w-3 h-3" />
                        <span>{project.Objective}</span>
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

          <section className="py-8 px-4 bg-card/30">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-xl mb-2 text-secondary">Proyectos Anteriores</h2>
              <p className="text-sm text-foreground">Experiencias pasadas que moldearon mi journey como indie hacker</p>
            </div>

            <div className="space-y-4">
              {previousProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <project.icon className={`w-5 h-5 ${project.color}`} />
                      <div>
                        <CardTitle className={`font-heading text-base group-hover:${project.color} transition-colors`}>
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-foreground/80 text-sm">{project.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className={`text-sm font-medium ${project.color}`}>{project.outcome}</div>
                      <div className="text-sm text-muted-foreground">{project.metrics}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="experience" className="py-8 px-4">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-xl mb-2 text-accent">Mi Journey</h2>
              <p className="text-sm text-foreground">
                Cómo evolucione de desarrollador a indie hacker y constructor de productos
              </p>
            </div>

            <div className="space-y-4">
              {experience.map((job, index) => (
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
              <h2 className="font-heading font-bold text-xl mb-2 text-accent">Formación</h2>
            </div>

            <Card className="hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <div>
                    <CardTitle className="font-heading text-base">Ingeniería Informática</CardTitle>
                    <CardDescription className="text-sm font-medium mt-1 text-foreground/80">
                      Universidad Politécnica de Madrid • 2016-2020
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">
                  Especialización en Desarrollo de Software y Sistemas Distribuidos
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="contact" className="py-8 px-4">
            <div className="text-center">
              <h2 className="font-heading font-bold text-xl mb-3 text-primary">¿Listo para construir algo épico?</h2>
              <p className="text-sm text-foreground mb-6">
                Siempre abierto a colaborar en proyectos innovadores, mentoría en indie hacking, o simplemente charlar
                sobre startups y tecnología.
              </p>
              <div className="flex flex-col gap-3">
                <Button size="default" className="font-medium border-2">
                  <Mail className="w-4 h-4 mr-2" />
                  alex.rodriguez@indiedev.com
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </section>

          <footer className="py-6 px-4 border-t border-primary/20 bg-background">
            <div className="text-center text-foreground/60">
              <p className="text-sm">
                &copy; 2024 Alex Rodríguez. Construido con ❤️ y mucho ☕ usando Next.js y Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
