import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Contact.scss'

const WHATSAPP_NUMBER = '5519989992747'
const BUSINESS_START = 9
const BUSINESS_END = 17

const eventLabels: Record<string, string> = {
  aniversario: 'Aniversário',
  corporativo: 'Corporativo',
  casamento: 'Casamento / Noivado',
  cha: 'Chá de Bebê / Revelação',
  outro: 'Outro',
}

function maskPhone(value: string): string {
  const digits = value.replaceAll(/\D/g, '').slice(0, 11)
  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [event, setEvent] = useState('')
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [withinHours, setWithinHours] = useState(true)
  const [wantsSalgado, setWantsSalgado] = useState(false)
  const [wantsBolo, setWantsBolo] = useState(false)
  const [wantsKit, setWantsKit] = useState(false)
  const [salgadoQty, setSalgadoQty] = useState('')
  const [boloQty, setBoloQty] = useState('')
  const [kitDesc, setKitDesc] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(maskPhone(e.target.value))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const h = new Date().getHours()
    const inHours = h >= BUSINESS_START && h < BUSINESS_END
    setWithinHours(inHours)
    setSubmitted(true)

    const eventLabel = eventLabels[event] || event || 'Não informado'

    const produtos: string[] = []
    if (wantsSalgado) produtos.push(`🥟 Salgados — ${salgadoQty ? `${salgadoQty} unidades` : 'quantidade a definir'}`)
    if (wantsBolo)    produtos.push(`🎂 Bolo — ${boloQty ? `${boloQty} unidade(s)` : 'quantidade a definir'}`)
    if (wantsKit)     produtos.push(`🎁 Kit — ${kitDesc || 'a especificar'}`)

    const text = [
      'Olá! Gostaria de fazer uma encomenda. 🎉',
      '',
      `*Nome:* ${name || 'Não informado'}`,
      `*Telefone:* ${phone || 'Não informado'}`,
      `*Tipo de evento:* ${eventLabel}`,
      '',
      '*Produtos desejados:*',
      ...produtos,
      '',
      `*Detalhes adicionais:* ${details || 'Nenhum'}`,
    ].join('\n')

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handleReset = () => {
    setName('')
    setPhone('')
    setEvent('')
    setDetails('')
    setWantsSalgado(false)
    setWantsBolo(false)
    setWantsKit(false)
    setSalgadoQty('')
    setBoloQty('')
    setKitDesc('')
    setSubmitted(false)
  }

  return (
    <section id="contato" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h2 className="contact__title">
            Faça sua{' '}
            <span>encomenda</span>
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
              <i className="bi bi-whatsapp" />{' '}
              Chamar no WhatsApp
            </a>

            <div className="contact__details">
              <div className="contact__detail">
                <i className="bi bi-clock contact__detail-icon" />
                <div>
                  <span className="contact__detail-label">Horário de atendimento</span>
                  <span className="contact__detail-value">Seg a Sáb, 9h às 17h</span>
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

        {submitted ? (
          <div className="contact__success">
            <i
              className={`bi ${
                withinHours ? 'bi-check-circle' : 'bi-clock'
              } contact__success-icon${
                withinHours ? '' : ' contact__success-icon--warn'
              }`}
            />
            <h3 className="contact__success-title">
              {withinHours ? 'Pedido enviado! 🎉' : 'Mensagem enviada!'}
            </h3>
            <p className="contact__success-text">
              {withinHours
                ? 'Você foi redirecionado para o nosso WhatsApp com a mensagem pronta. Aguarde nosso retorno em breve! 😊'
                : 'Estamos fora do horário de atendimento (9h–17h), mas sua mensagem foi encaminhada pelo WhatsApp. Retornaremos assim que possível!'}
            </p>
            <button onClick={handleReset} className="contact__reset">
              Fazer outro pedido
            </button>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>

            {/* Dados pessoais */}
            <div className="contact__field">
              <label htmlFor="name" className="contact__label">Nome</label>
              <input
                type="text"
                id="name"
                className="contact__input"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="phone" className="contact__label">Telefone / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                className="contact__input"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={handlePhoneChange}
                inputMode="numeric"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="event" className="contact__label">Tipo do evento</label>
              <select
                id="event"
                className="contact__input contact__select"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="aniversario">Aniversário</option>
                <option value="corporativo">Corporativo</option>
                <option value="casamento">Casamento / Noivado</option>
                <option value="cha">Chá de Bebê / Revelação</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Seleção de produtos */}
            <div className="contact__field">
              <span className="contact__label">O que você quer encomendar?</span>
              <div className="contact__order-options">

                <label className={`contact__order-option ${wantsSalgado ? 'contact__order-option--checked' : ''}`}>
                  <input
                    type="checkbox"
                    className="contact__order-checkbox"
                    checked={wantsSalgado}
                    onChange={(e) => setWantsSalgado(e.target.checked)}
                  />
                  <span className="contact__order-icon">🥟</span>
                  <span className="contact__order-name">Salgados</span>
                  <i className="bi bi-check-lg contact__order-check" />
                </label>

                <label className={`contact__order-option ${wantsBolo ? 'contact__order-option--checked' : ''}`}>
                  <input
                    type="checkbox"
                    className="contact__order-checkbox"
                    checked={wantsBolo}
                    onChange={(e) => setWantsBolo(e.target.checked)}
                  />
                  <span className="contact__order-icon">🎂</span>
                  <span className="contact__order-name">Bolo</span>
                  <i className="bi bi-check-lg contact__order-check" />
                </label>

                <label className={`contact__order-option ${wantsKit ? 'contact__order-option--checked' : ''}`}>
                  <input
                    type="checkbox"
                    className="contact__order-checkbox"
                    checked={wantsKit}
                    onChange={(e) => setWantsKit(e.target.checked)}
                  />
                  <span className="contact__order-icon">🎁</span>
                  <span className="contact__order-name">Kit</span>
                  <i className="bi bi-check-lg contact__order-check" />
                </label>

              </div>
            </div>

            {/* Campos condicionais */}
            {wantsSalgado && (
              <div className="contact__field contact__field--conditional">
                <label htmlFor="salgado-qty" className="contact__label">
                  Quantos salgados?
                </label>
                <input
                  type="number"
                  id="salgado-qty"
                  className="contact__input"
                  placeholder="Ex: 100"
                  min={1}
                  value={salgadoQty}
                  onChange={(e) => setSalgadoQty(e.target.value)}
                />
              </div>
            )}

            {wantsBolo && (
              <div className="contact__field contact__field--conditional">
                <label htmlFor="bolo-qty" className="contact__label">
                  Quantos bolos?
                </label>
                <input
                  type="number"
                  id="bolo-qty"
                  className="contact__input"
                  placeholder="Ex: 1"
                  min={1}
                  value={boloQty}
                  onChange={(e) => setBoloQty(e.target.value)}
                />
              </div>
            )}

            {wantsKit && (
              <div className="contact__field contact__field--conditional">
                <label htmlFor="kit-desc" className="contact__label">
                  Qual kit você deseja?
                </label>
                <input
                  type="text"
                  id="kit-desc"
                  className="contact__input"
                  placeholder="Ex: Kit Festa Infantil, Kit Corporativo..."
                  value={kitDesc}
                  onChange={(e) => setKitDesc(e.target.value)}
                />
              </div>
            )}

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Detalhes adicionais</label>
              <textarea
                id="message"
                className="contact__input contact__textarea"
                placeholder="Data do evento, observações, alergias..."
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={!wantsSalgado && !wantsBolo && !wantsKit}
            >
              <i className="bi bi-whatsapp" />{' '}
              Enviar Pedido
            </button>

          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
