import { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Header.scss'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <a href="#inicio" className="header__logo">
          <img
            src={isScrolled ? '/isotipos/logo_laranja_SSB.png' : '/isotipos/logo_branco_SSB.png'}
            alt="Isotipo Santa Salgados & Bolos"
            className="header__logo-img"
          />
          <div className="header__logo-text">
            <span className="header__logo-name">Santa</span>
            <span className="header__logo-subtitle">Salgados & Bolos</span>
          </div>
        </a>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <a href="#inicio" className="header__nav-link" onClick={handleNavClick}>Início</a>
          <a href="#sobre" className="header__nav-link" onClick={handleNavClick}>Sobre</a>
          <a href="#cardapio" className="header__nav-link" onClick={handleNavClick}>Cardápio</a>
          <a href="#depoimentos" className="header__nav-link" onClick={handleNavClick}>Depoimentos</a>
          <a
            href="https://www.instagram.com/santa_suculentas_/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__nav-link header__nav-link--instagram"
            onClick={handleNavClick}
            aria-label="Instagram"
          >
            <i className="bi bi-instagram" />
          </a>
          <a href="#contato" className="header__nav-link header__nav-link--cta" onClick={handleNavClick}>
            Faça sua Encomenda
          </a>
        </nav>

        <button
          className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
