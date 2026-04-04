import { useState } from 'react'
import './Testimonials.scss'

const testimonials = [
  {
    name: 'Mariana Silva',
    role: 'Festa de aniversário',
    text: 'Encomendei 300 salgados e um bolo de chocolate para o aniversário da minha filha. Tudo chegou no horário, quentinho e delicioso. Os convidados não pararam de elogiar!',
    initials: 'MS',
  },
  {
    name: 'Roberto Almeida',
    role: 'Confraternização de empresa',
    text: 'Pedimos o kit confraternização para o fim de ano da empresa. A qualidade dos salgados é impressionante — dá pra sentir que é feito com carinho. Atendimento nota 10.',
    initials: 'RA',
  },
  {
    name: 'Fernanda Costa',
    role: 'Cliente frequente',
    text: 'Toda sexta-feira peço os salgados para o lanche da família. A coxinha é a melhor que já comi! Preço justo, qualidade incrível e a dona é uma pessoa maravilhosa.',
    initials: 'FC',
  },
  {
    name: 'Patrícia Mendes',
    role: 'Chá de bebê',
    text: 'O bolo de cenoura com chocolate estava divino! Fiz o chá de bebê do meu filho com os salgados da Santa e todo mundo amou. Recomendo de olhos fechados.',
    initials: 'PM',
  },
  {
    name: 'Carlos Souza',
    role: 'Casamento',
    text: 'Usamos os salgados da Santa no nosso casamento e foi um sucesso total. Os convidados pediram o contato na hora. Qualidade e capricho em cada detalhe. Muito obrigado!',
    initials: 'CS',
  },
]

const row1 = [...testimonials, ...testimonials]
const row2 = [...testimonials, ...testimonials]

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="testimonials__card">
    <span className="testimonials__quote-icon">"</span>
    <p className="testimonials__text">{t.text}</p>
    <div className="testimonials__author">
      <div className="testimonials__avatar">{t.initials}</div>
      <div>
        <p className="testimonials__name">{t.name}</p>
        <p className="testimonials__role">{t.role}</p>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="depoimentos" className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">O que nossos clientes dizem</h2>
        <p className="testimonials__subtitle">
          A satisfação de quem prova é o nosso maior ingrediente
        </p>
      </div>

      <div
        className={`testimonials__marquee-wrap${isPaused ? ' testimonials__marquee-wrap--paused' : ''}`}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Fila 1 — rola para a esquerda */}
        <div className="testimonials__track testimonials__track--left">
          {row1.map((t, i) => (
            <Card key={`r1-${t.name}-${i}`} t={t} />
          ))}
        </div>
        {/* Fila 2 — rola para a direita */}
        <div className="testimonials__track testimonials__track--right">
          {row2.map((t, i) => (
            <Card key={`r2-${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
