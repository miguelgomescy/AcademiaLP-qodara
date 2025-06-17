"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [counters, setCounters] = useState({
    members: 0,
    trainers: 0,
    classes: 0,
    years: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { members: 1200, trainers: 50, classes: 100, years: 15 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      Object.keys(targets).forEach((key) => {
        let current = 0
        const increment = targets[key] / steps

        const timer = setInterval(() => {
          current += increment
          if (current >= targets[key]) {
            current = targets[key]
            clearInterval(timer)
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }, stepTime)
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      })
    })

    const statsSection = document.querySelector(".stats-section")
    if (statsSection) observer.observe(statsSection)

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>
              SUA <span>ACADEMIA</span>
            </h2>
          </div>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#services">Serviços</a>
            <a href="#trainers">Treinadores</a>
        {/*     <a href="#about">Sobre</a> */}
            <a href="#contact">Contato</a>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transforme seu corpo.
              <br />
              <span className="highlight">Supere seus limites.</span>
            </h1>
            <p className="hero-description">
              Descubra o melhor de você com nossos programas personalizados, equipamentos de última geração e
              treinadores especializados.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Começar Agora</button>
              <button className="btn btn-secondary">Agendar Aula Grátis</button>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
        {/*   <p>Tudo que seu corpo precisa!</p> */}
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏋️</div>
              <h3>Musculação</h3>
              <p>Treinamento personalizado com equipamentos modernos para todos os níveis de condicionamento físico.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚴</div>
              <h3>Ciclismo</h3>
              <p>Aulas dinâmicas de ciclismo indoor com música motivadora e instrutores qualificados.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧘</div>
              <h3>Pilates</h3>
              <p>Exercícios focados no fortalecimento do core, flexibilidade e consciência corporal.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👥</div>
              <h3>Personal Training</h3>
              <p>Acompanhamento individual com treinadores especializados para resultados otimizados.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🥊</div>
              <h3>Boxe</h3>
              <p>Pratique todas as quarta feiras, 20:00, com nossos instruotres!</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💃🏻🕺🏻</div>
              <h3>Zumba e Fit dance</h3>
              <p>Dance, dance, dance e dance! Toda quinta-feira você dança conosco</p>
            </div>

              <button className="btn btn-primary">Começar Agora</button>
            
          </div>
          
        </div>
        
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">+{counters.members}</div>
              <div className="stat-label">Alunos Ativos</div>
              <div className="stat-stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+{counters.trainers}</div>
              <div className="stat-label">Treinadores</div>
              <div className="stat-stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+{counters.classes}</div>
              <div className="stat-label">Aulas por Semana</div>
              <div className="stat-stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+{counters.years}</div>
              <div className="stat-label">Anos de Experiência</div>
              <div className="stat-stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="trainers">
        <div className="container">
          <div className="trainers-content">
            <div className="trainers-text">
              <h2>Treinadores Qualificados</h2>
              <p>
                Nossa equipe é formada por profissionais certificados e apaixonados por fitness, prontos para te ajudar
                a alcançar seus objetivos.
              </p>
              <button className="btn btn-primary">Conheça Nossa Equipe</button>
            </div>
            <div className="trainers-grid">

              <div className="trainer-card">
                <div className="trainer-image">
                  <img src="/17.png?height=200&width=200" alt="Treinadora 2" />
                </div>
                <h4>Mestre Junior</h4>
                <p>Instrutora de Pilates</p>
              </div>
              <div className="trainer-card">
                <div className="trainer-image">
                  <img src="/18.png?height=200&width=200" alt="Treinador 3" />
                </div>
                <h4>Instrutor Nelson</h4>
                <p>Personal Trainer</p>
              </div>
              <div className="trainer-card">
                <div className="trainer-image">
                  <img src="/19.png?height=200&width=200" alt="Treinadora 4" />
                </div>
                <h4>Professora Maria Silva</h4>
                <p>Instrutora de Spinning</p>
              </div>
              <div className="trainer-card">
                <div className="trainer-image">
                  <img src="/20.png?height=200&width=200" alt="Treinadora 4" />
                </div>
                <h4>Professora Claudia</h4>
                <p>Instrutora de Spinning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Comece Hoje Mesmo</h2>
            <p>Transforme sua vida com nossos programas personalizados</p>
            <button className="btn btn-primary btn-large">Matricule-se Agora</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>
                FIT<span>ACADEMY</span>
              </h3>
              <p>Transformando vidas através do fitness desde 2008.</p>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📞 (11) 9999-9999</p>
              <p>📧 contato@fitacademy.com</p>
              <p>📍 Rua do Fitness, 123 - São Paulo</p>
            </div>
            <div className="footer-section">
              <h4>Horários</h4>
              <p>Segunda a Sexta: 6h às 22h</p>
              <p>Sábado: 8h às 18h</p>
              <p>Domingo: 8h às 16h</p>
            </div>
            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#">📘 Facebook</a>
                <a href="#">📷 Instagram</a>
                <a href="#">🐦 Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FitAcademy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

            <a
  href="https://wa.me/5511919223489"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
      >
     🟢 WhatsApp
    </a>
    </div>
  )
}

export default App
