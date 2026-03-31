import 'bootstrap-icons/font/bootstrap-icons.css'
import './Contact.scss'

const Contact = () => {
  return (
    <section id="contato" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h2 className="contact__title">
            Faça sua
            <span> encomenda</span>
          </h2>
          <p className="contact__text">
            Entre em contato pelo WhatsApp ou preencha o formulário ao lado.
            Respondemos em até 2 horas durante o horário comercial.
          </p>

          <div className="contact__channels">
            <a
              href="https://wa.me/5519989992747"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              <i className="bi bi-whatsapp" />
              Chamar no WhatsApp
            </a>

            <div className="contact__details">
              <div className="contact__detail">
                <i className="bi bi-clock contact__detail-icon" />
                <div>
                  <span className="contact__detail-label">Horário de atendimento</span>
                  <span className="contact__detail-value">Seg a Sáb, 8h às 18h</span>
                </div>
              </div>
              <div className="contact__detail">
                <i className="bi bi-calendar-check contact__detail-icon" />
                <div>
                  <span className="contact__detail-label">Prazo de encomenda</span>
                  <span className="contact__detail-value">Mínimo 48h de antecedência</span>
                </div>
              </div>
              <div className="contact__detail">
                <i className="bi bi-geo-alt contact__detail-icon" />
                <div>
                  <span className="contact__detail-label">Entrega</span>
                  <span className="contact__detail-value">Região de Hortolândia–SP</span>
                  <span className="contact__detail-sub">Rua Ver. Oscar A. Ghiraldelli, 1317</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact__field">
            <label htmlFor="name" className="contact__label">Nome</label>
            <input
              type="text"
              id="name"
              className="contact__input"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="contact__field">
            <label htmlFor="phone" className="contact__label">Telefone / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              className="contact__input"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div className="contact__field">
            <label htmlFor="event" className="contact__label">Tipo do evento</label>
            <select id="event" className="contact__input contact__select">
              <option value="">Selecione...</option>
              <option value="aniversario">Aniversário</option>
              <option value="corporativo">Corporativo</option>
              <option value="casamento">Casamento / Noivado</option>
              <option value="cha">Chá de Bebê / Revelação</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div className="contact__field">
            <label htmlFor="message" className="contact__label">Detalhes da encomenda</label>
            <textarea
              id="message"
              className="contact__input contact__textarea"
              placeholder="Quantidade de pessoas, data do evento, itens desejados..."
              rows={4}
            />
          </div>
          <button type="submit" className="contact__submit">
            Enviar Pedido
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
