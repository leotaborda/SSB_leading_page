import 'bootstrap-icons/font/bootstrap-icons.css'
import './Strip.scss'

const perks = [
  { icon: 'bi-handshake',   text: 'Atendimento personalizado' },
  { icon: 'bi-clock',       text: 'Pontualidade garantida' },
  { icon: 'bi-heart-fill',  text: 'Feito com muito amor' },
  { icon: 'bi-stars',       text: 'Qualidade em cada detalhe' },
]

const Strip = () => (
  <div className="strip">
    <div className="strip__inner">
      {perks.map((p) => (
        <div key={p.text} className="strip__item">
          <span className="strip__text">{p.text}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Strip
