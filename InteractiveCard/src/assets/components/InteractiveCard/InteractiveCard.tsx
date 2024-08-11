import './InteractiveCard.css';
import S24Image from '../../img/S24.jpg'; // Atribuindo a imagem a uma variável

const InteractiveCard = () => {
  return (
    <div className="card">
      <h2 className="product-name">Samsung Galaxy S24</h2>
      <img src={S24Image} alt="Foto de um celular do modelo Samsung Galaxy S24" /> {/* Usando a variável diretamente */}
      <p className="price">R$4199,99</p>
      <p className="description">
        O Samsung Galaxy S24 combina design elegante com desempenho potente. Sua tela AMOLED oferece cores vibrantes, enquanto o processador de última geração garante alta performance. Destaque para a câmera avançada com recursos de fotografia profissional, e a bateria de longa duração com carregamento rápido. Ideal para quem busca inovação e eficiência em um único dispositivo.
      </p>
    </div>
  );
};

export default InteractiveCard;
