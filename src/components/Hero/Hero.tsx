import './Hero.scss'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__badge">Feito com amor, desde 2015</p>
        <h1 className="hero__title">
          Salgados & Bolos
          <span className="hero__title-accent"> que aquecem o coração</span>
        </h1>
        <p className="hero__description">
          Receitas tradicionais feitas à mão com ingredientes frescos e selecionados.
          Encomende para festas, eventos ou para saborear no dia a dia.
        </p>
        <div className="hero__actions">
          <a href="#cardapio" className="hero__btn hero__btn--primary">
            Ver Cardápio
          </a>
          <a href="#contato" className="hero__btn hero__btn--outline">
            Fazer Encomenda
          </a>
        </div>
        <div className="hero__badges">
          <div className="hero__badge-item">
            <span className="hero__badge-number">+2.000</span>
            <span className="hero__badge-label">Encomendas entregues</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge-item">
            <span className="hero__badge-number">100%</span>
            <span className="hero__badge-label">Feito artesanal</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge-item">
            <span className="hero__badge-number">+9 anos</span>
            <span className="hero__badge-label">De tradição</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
