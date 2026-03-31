import 'bootstrap-icons/font/bootstrap-icons.css'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo">
              <img
                src="/isotipos/logo_branco_SSB.png"
                alt="Isotipo Santa Salgados & Bolos"
                className="footer__logo-img"
              />
              <div className="footer__logo-text">
                <span className="footer__logo-name">Santa</span>
                <span className="footer__logo-subtitle">Salgados & Bolos</span>
              </div>
            </a>
            <p className="footer__tagline">
              Sabor artesanal feito com amor para tornar seus momentos ainda mais especiais.
            </p>
            <div className="footer__social">
              <a
                href="https://www.instagram.com/santa_suculentas_/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href="https://wa.me/5519989992747"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" />
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Navegação</h4>
            <a href="#inicio" className="footer__link">Início</a>
            <a href="#sobre" className="footer__link">Sobre</a>
            <a href="#cardapio" className="footer__link">Cardápio</a>
            <a href="#depoimentos" className="footer__link">Depoimentos</a>
            <a href="#contato" className="footer__link">Contato</a>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Contato</h4>
            <p className="footer__info">
              <i className="bi bi-clock footer__info-icon" /> Seg a Sáb, 9h às 17h
            </p>
            <p className="footer__info">
              <i className="bi bi-whatsapp footer__info-icon" /> (19) 98999-2747
            </p>
            <p className="footer__info">
              <i className="bi bi-envelope footer__info-icon" /> contato@santasalgados.com.br
            </p>
            <p className="footer__info">
              <i className="bi bi-geo-alt footer__info-icon" /> Hortolândia – SP
            </p>
            <a
              href="https://www.instagram.com/santa_suculentas_/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__info footer__info--link"
            >
              <i className="bi bi-instagram footer__info-icon" /> @santa_suculentas_
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Santa Salgados & Bolos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
