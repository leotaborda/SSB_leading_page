import 'bootstrap-icons/font/bootstrap-icons.css'
import './FloatButton.scss'

const WHATSAPP_URL = 'https://wa.me/5519989992747'

const FloatButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="float-btn"
    aria-label="Falar no WhatsApp"
  >
    <i className="bi bi-whatsapp float-btn__icon" />
  </a>
)

export default FloatButton
