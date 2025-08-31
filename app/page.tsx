"use client"

import { useState, useEffect } from "react"
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
} from "lucide-react"

export default function IndieHackerPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "projects", "experience", "education"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentProjects = [
    {
      title: "TaskFlow SaaS",
      description: "Plataforma de gestión de proyectos para equipos remotos con IA integrada",
      status: "En desarrollo",
      tech: ["Next.js", "Supabase", "OpenAI", "Stripe"],
      metrics: "€2.5K MRR objetivo",
      users: "Beta con 150 usuarios",
      icon: Rocket,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "CodeSnippet Marketplace",
      description: "Marketplace para comprar y vender snippets de código reutilizables",
      status: "MVP lanzado",
      tech: ["React", "Firebase", "PayPal API"],
      metrics: "€800 MRR actual",
      users: "500+ desarrolladores",
      icon: Code,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      title: "LocalBiz Analytics",
      description: "Dashboard de analytics para pequeños negocios locales",
      status: "Validando mercado",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      metrics: "€1K MRR objetivo",
      users: "25 negocios piloto",
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  const previousProjects = [
    {
      title: "FitTracker App",
      description: "App móvil para seguimiento de ejercicios (vendida en 2023)",
      outcome: "Vendida por €15K",
      tech: ["React Native", "Firebase"],
      metrics: "2K+ usuarios activos",
      icon: Target,
      color: "text-primary",
    },
    {
      title: "Newsletter Automation",
      description: "Herramienta de automatización de newsletters (cerrada)",
      outcome: "Aprendizaje clave: validación de mercado",
      tech: ["Node.js", "SendGrid"],
      metrics: "100 usuarios beta",
      icon: Mail,
      color: "text-secondary",
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

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-lg text-primary">IndieHacker.dev</div>
            <div className="hidden md:flex items-center space-x-6">
              {["Inicio", "Proyectos", "Experiencia", "Contacto"].map((item, index) => (
                <a
                  key={item}
                  href={`#${["hero", "projects", "experience", "contact"][index]}`}
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-primary/20">
              <div className="flex flex-col space-y-3 pt-4">
                {["Inicio", "Proyectos", "Experiencia", "Contacto"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${["hero", "projects", "experience", "contact"][index]}`}
                    className="text-sm text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
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
                <span>Madrid, España</span>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>Construyendo</span>
              </div>

              <h1 className="font-heading font-bold text-xl text-balance">
                Hola, soy <span className="text-primary">Alex Rodríguez</span>
              </h1>

              <p className="text-base text-secondary font-medium">Indie Hacker & Startup Builder</p>

              <p className="text-sm text-foreground leading-relaxed max-w-md mx-auto">
                Transformo ideas en productos digitales rentables. Especializado en MVPs rápidos, validación de mercado
                y crecimiento de startups desde cero hasta €10K+ MRR.
              </p>
            </div>

            <div className="relative gaming-float flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <Avatar className="relative w-24 h-24 border-4 border-primary shadow-xl gaming-glow">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback className="text-xl font-heading font-bold bg-card text-primary">AR</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex justify-center space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="w-10 h-10 p-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Mail className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-10 h-10 p-0 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-10 h-10 p-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-10 h-10 p-0 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
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
                  <span>Madrid, España</span>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span>Construyendo</span>
                </div>

                <h1 className="font-heading font-bold text-2xl lg:text-3xl text-balance">
                  Hola, soy <span className="text-primary">Alex Rodríguez</span>
                </h1>

                <p className="text-lg text-secondary font-medium">Indie Hacker & Startup Builder</p>

                <p className="text-sm text-foreground leading-relaxed">
                  Transformo ideas en productos digitales rentables. Especializado en MVPs rápidos, validación de
                  mercado y crecimiento de startups desde cero hasta €10K+ MRR.
                </p>
              </div>

              <div className="relative gaming-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                <Avatar className="relative w-32 h-32 mx-auto border-4 border-primary shadow-xl gaming-glow">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl font-heading font-bold bg-card text-primary">AR</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex justify-center space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 p-0 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
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
                    className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary/50 border-2 cursor-pointer"
                  >
                    <CardHeader className={`${project.bgColor} transition-all duration-300`}>
                      <div className="flex items-center justify-between">
                        <project.icon className={`w-6 h-6 ${project.color}`} />
                        <Badge variant="outline" className={`${project.color} border-current text-xs`}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className={`font-heading text-lg group-hover:${project.color} transition-colors`}>
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/80 text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                          <DollarSign className="w-3 h-3" />
                          <span>{project.metrics}</span>
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

            <section className="py-12 px-6 bg-card/30">
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-secondary">
                  Proyectos Anteriores
                </h2>
                <p className="text-base text-foreground">
                  Experiencias pasadas que moldearon mi journey como indie hacker
                </p>
              </div>

              <div className="grid gap-6">
                {previousProjects.map((project, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <project.icon className={`w-6 h-6 ${project.color}`} />
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
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className={`text-sm font-medium ${project.color}`}>{project.outcome}</div>
                        <div className="text-sm text-muted-foreground">{project.metrics}</div>
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
                      <CardTitle className="font-heading text-xl">Ingeniería Informática</CardTitle>
                      <CardDescription className="text-base font-medium mt-1 text-foreground/80">
                        Universidad Politécnica de Madrid • 2016-2020
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-foreground/80">
                    Especialización en Desarrollo de Software y Sistemas Distribuidos
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
                  Siempre abierto a colaborar en proyectos innovadores, mentoría en indie hacking, o simplemente charlar
                  sobre startups y tecnología.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="font-medium border-2">
                    <Mail className="w-5 h-5 mr-2" />
                    alex.rodriguez@indiedev.com
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                  </Button>
                </div>
              </div>
            </section>

            <footer className="py-6 px-6 border-t border-primary/20 bg-background">
              <div className="text-center text-foreground/60">
                <p>&copy; 2024 Alex Rodríguez. Construido con ❤️ y mucho ☕ usando Next.js y Tailwind CSS.</p>
                <p className="text-sm mt-2 text-primary">Keep building, keep shipping! 🚀</p>
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
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className={`flex items-center space-x-2 text-xs font-medium ${project.color}`}>
                        <DollarSign className="w-3 h-3" />
                        <span>{project.metrics}</span>
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
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
              <p className="text-xs mt-2 text-primary">Keep building, keep shipping! 🚀</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
