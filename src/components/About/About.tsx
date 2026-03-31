import 'bootstrap-icons/font/bootstrap-icons.css'
import './About.scss'

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="about__container">

        <div className="about__visual">
          <div className="about__visual-inner">
            <div className="about__monogram">
              <img
                src="/isotipos/logo_branco_SSB.png"
                alt="Isotipo Santa Salgados & Bolos"
                className="about__monogram-img"
              />
              <div className="about__monogram-circle" />
            </div>
            <p className="about__visual-quote">
              Comida boa é aquela que a gente faz pensando em quem vai comer.
            </p>
            <div className="about__visual-stats">
              <div className="about__stat">
                <span className="about__stat-number">+2.000</span>
                <span className="about__stat-label">encomendas</span>
              </div>
              <div className="about__stat-divider" />
              <div className="about__stat">
                <span className="about__stat-number">+9</span>
                <span className="about__stat-label">anos</span>
              </div>
              <div className="about__stat-divider" />
              <div className="about__stat">
                <span className="about__stat-number">100%</span>
                <span className="about__stat-label">artesanal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__text-col">
          <span className="about__eyebrow">Nossa história</span>
          <h2 className="about__title">
            Uma história de amor
            <em> pela cozinha</em>
          </h2>
          <p className="about__text">
            A Santa Salgados & Bolos nasceu do carinho e da dedicação de quem acredita
            que comida boa é feita com ingredientes de qualidade e muito amor. Cada salgado
            é montado à mão, cada bolo preparado com receitas que passaram de geração em geração.
          </p>
          <p className="about__text">
            Nosso compromisso é transformar seus momentos especiais — festas de aniversário,
            confraternizações, eventos ou simplesmente um lanche da tarde — em lembranças
            deliciosas e inesquecíveis.
          </p>

          <div className="about__features">
            <div className="about__feature">
              <span className="about__feature-icon">
                <i className="bi bi-flower1" />
              </span>
              <div>
                <h3 className="about__feature-title">Ingredientes Frescos</h3>
                <p className="about__feature-desc">Selecionados diariamente para garantir sabor e qualidade</p>
              </div>
            </div>
            <div className="about__feature">
              <span className="about__feature-icon">
                <i className="bi bi-hand-index-thumb" />
              </span>
              <div>
                <h3 className="about__feature-title">Feito à Mão</h3>
                <p className="about__feature-desc">Cada peça preparada artesanalmente com cuidado e capricho</p>
              </div>
            </div>
            <div className="about__feature">
              <span className="about__feature-icon">
                <i className="bi bi-box-seam" />
              </span>
              <div>
                <h3 className="about__feature-title">Entrega com Carinho</h3>
                <p className="about__feature-desc">Embalados e entregues com todo o cuidado que você merece</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
