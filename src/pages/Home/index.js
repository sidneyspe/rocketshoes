import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-viale-premium-masculino/26/HZM-0644-226/HZM-0644-226_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 179,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-viale-premium-masculino/26/HZM-0644-226/HZM-0644-226_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 179,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-viale-premium-masculino/26/HZM-0644-226/HZM-0644-226_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 179,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
