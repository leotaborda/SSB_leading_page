import { useState } from 'react'
import './Menu.scss'

type Category = 'salgados' | 'bolos' | 'kits'

interface MenuItem {
  name: string
  description: string
  serves: string
  price: string
  tag?: string
}

const menuData: Record<Category, MenuItem[]> = {
  salgados: [
    {
      name: 'Coxinha de Frango',
      description: 'Massa crocante recheada com frango desfiado temperado com ervas finas',
      serves: 'Cento (100 un.)',
      price: 'R$ 75,00',
      tag: 'Mais Pedido',
    },
    {
      name: 'Bolinha de Queijo',
      description: 'Massa macia com recheio cremoso de queijo muçarela e parmesão',
      serves: 'Cento (100 un.)',
      price: 'R$ 70,00',
    },
    {
      name: 'Risole de Presunto e Queijo',
      description: 'Massa dourada crocante com recheio de presunto e queijo derretido',
      serves: 'Cento (100 un.)',
      price: 'R$ 70,00',
    },
    {
      name: 'Esfiha de Carne',
      description: 'Massa aberta assada com carne moída temperada na tradição árabe',
      serves: 'Cento (100 un.)',
      price: 'R$ 80,00',
    },
    {
      name: 'Kibe Frito',
      description: 'Trigo para quibe com carne moída, hortelã e especiarias',
      serves: 'Cento (100 un.)',
      price: 'R$ 80,00',
    },
    {
      name: 'Empada de Palmito',
      description: 'Massa amanteigada com recheio cremoso de palmito',
      serves: 'Cento (100 un.)',
      price: 'R$ 85,00',
    },
  ],
  bolos: [
    {
      name: 'Bolo de Chocolate',
      description: 'Massa fofinha de chocolate com cobertura de ganache e raspas',
      serves: 'Serve até 20 pessoas',
      price: 'R$ 65,00',
      tag: 'Favorito',
    },
    {
      name: 'Bolo de Cenoura',
      description: 'Receita da vovó com cobertura generosa de chocolate',
      serves: 'Serve até 20 pessoas',
      price: 'R$ 55,00',
    },
    {
      name: 'Bolo de Milho',
      description: 'Bolo cremoso de milho verde, perfeito para o café da tarde',
      serves: 'Serve até 15 pessoas',
      price: 'R$ 50,00',
    },
    {
      name: 'Bolo Prestígio',
      description: 'Chocolate com recheio de coco cremoso e cobertura de ganache',
      serves: 'Serve até 25 pessoas',
      price: 'R$ 80,00',
    },
    {
      name: 'Bolo de Fubá',
      description: 'Tradicional bolo de fubá com erva-doce, combina com café',
      serves: 'Serve até 15 pessoas',
      price: 'R$ 45,00',
    },
    {
      name: 'Bolo Red Velvet',
      description: 'Massa aveludada com cream cheese e decoração artesanal',
      serves: 'Serve até 20 pessoas',
      price: 'R$ 90,00',
      tag: 'Especial',
    },
  ],
  kits: [
    {
      name: 'Kit Festa Infantil',
      description: '200 salgados variados + 1 bolo de chocolate decorado + refrigerantes',
      serves: 'Serve até 30 pessoas',
      price: 'R$ 280,00',
      tag: 'Popular',
    },
    {
      name: 'Kit Confraternização',
      description: '300 salgados variados + 2 bolos à escolha + sucos naturais',
      serves: 'Serve até 50 pessoas',
      price: 'R$ 450,00',
    },
    {
      name: 'Kit Café da Tarde',
      description: '100 mini salgados + 1 bolo caseiro + café e acompanhamentos',
      serves: 'Serve até 15 pessoas',
      price: 'R$ 180,00',
    },
    {
      name: 'Kit Festa Completa',
      description: '500 salgados + 3 bolos + bebidas + docinhos variados',
      serves: 'Serve até 80 pessoas',
      price: 'R$ 750,00',
      tag: 'Melhor Custo',
    },
  ],
}

const categoryLabels: Record<Category, string> = {
  salgados: 'Salgados',
  bolos: 'Bolos',
  kits: 'Kits Festa',
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('salgados')

  return (
    <section id="cardapio" className="menu">
      <div className="menu__container">
        <h2 className="menu__title">Nosso Cardápio</h2>
        <p className="menu__subtitle">
          Tudo preparado com carinho e ingredientes selecionados. Valores por unidade de medida indicada.
        </p>

        <div className="menu__tabs">
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              className={`menu__tab ${activeCategory === cat ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {menuData[activeCategory].map((item) => (
            <div key={item.name} className="menu__card">
              <div className="menu__card-header">
                <h3 className="menu__card-name">
                  {item.name}
                  {item.tag && <span className="menu__card-tag">{item.tag}</span>}
                </h3>
              </div>
              <span className="menu__card-price">{item.price}</span>
              <p className="menu__card-desc">{item.description}</p>
              <span className="menu__card-serves">{item.serves}</span>
            </div>
          ))}
        </div>

        <p className="menu__note">
          * Valores sujeitos a alteração. Para encomendas personalizadas,
          entre em <a href="#contato">contato conosco</a>.
        </p>
      </div>
    </section>
  )
}

export default Menu
