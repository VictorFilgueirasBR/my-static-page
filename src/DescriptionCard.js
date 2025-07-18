import React from 'react';
import './DescriptionCard.css'; // Import the CSS file for this component

function DescriptionCard() {
  return (
    <div className="description-card-container">
      <h2 className="description-card-title">Vendo: Pistola Taurus TH9 Cal. 9mm - Impecável!</h2>
      <p>
        Excelente oportunidade para adquirir uma Pistola Taurus TH9 calibre 9mm em estado de seminova, com pouquíssimos disparos. Uma arma confiável e de alto desempenho, pronta para uso!
      </p>

      <h3>Detalhes do Pacote:</h3>
      <ul>
        <li><strong>Pistola Taurus TH9 (Cal. 9mm):</strong> Praticamente nova, com sua funcionalidade e segurança comprovadas.</li>
        <li><strong>3 Carregadores Mec-Gar Italianos:</strong> Renomados pela qualidade e confiabilidade, garantindo uma capacidade impressionante de 17+1 disparos.</li>
      </ul>

      <h3>Brindes Exclusivos de Alto Valor (Avaliados em R$ 1.200):</h3>
      <ul>
        <li><strong>18 Cartuchos de Munição:</strong> Um carregador completo mais um extra para você já começar a usar!</li>
        <li><strong>2 Conjuntos Completos de Coldres e Porta-Carregadores em Kydex:</strong>
          <ul>
            <li>Coldre Velado da Sabre + Porta-Carregador Single (Sabre): Ideal para porte discreto.</li>
            <li>Coldre com Passador de Cinto da Invictus + Porta-Carregador Duplo (Invictus): Perfeito para uso tático ou no estande.</li>
          </ul>
        </li>
      </ul>

      <h3>Motivo da Venda:</h3>
      <p>
        Aquisição de uma nova arma, por isso esta belezinha está disponível para você.
      </p>

      <h3>Preço e Condição:</h3>
      <p>
        Enquanto o preço de mercado para um conjunto similar varia entre R$ 6.500 e R$ 8.000, estou oferecendo este pacote completo por apenas <strong className="highlight-price">R$ 5.500</strong>.
      </p>
      <p>
        Uma oportunidade imperdível considerando o estado da arma e o valor dos brindes inclusos!
      </p>

      <p className="contact-call-to-action">
        Interessados, por favor, entrem em contato!
      </p>
    </div>
  );
}

export default DescriptionCard;