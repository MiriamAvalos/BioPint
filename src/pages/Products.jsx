import React from 'react';
import WhatsappButton from '../components/WhatsappButton';
import '../pages/Products.css';
import pinturaBlanca1 from '../assets/images/blanco1.jpg';
import pinturaBlanca2 from '../assets/images/blanco2.jpg';
import pinturaBlanca3 from '../assets/images/blanco3.jpg';
import pinturaBlanca4 from '../assets/images/blanco4.jpg';

const products = [
  {
    id: 1,
    color: 'Blanco',
    isPrincipal: true,
    images: [pinturaBlanca1, pinturaBlanca2, pinturaBlanca3, pinturaBlanca4],
    description:
      'Pintura blanca de alta calidad, color principal de nuestra línea.',
    presentations: [
      { size: 'Pequeña', volume: '1 litro', price: 115 },
      { size: 'Mediana', volume: '4 litros', price: 440 },
      { size: 'Grande', volume: '19 litros', price: 1800 },
    ],
  },
  {
    id: 2,
    color: 'Rojo',
    description: 'Color rojo vibrante para tus proyectos.',
    presentations: [
      { size: 'Pequeña', volume: '1 litro', price: 115 },
      { size: 'Mediana', volume: '4 litros', price: 440 },
      { size: 'Grande', volume: '19 litros', price: 1800 },
    ],
  },
  {
    id: 3,
    color: 'Café',
    description: 'Tono café natural y resistente.',
    presentations: [
      { size: 'Pequeña', volume: '1 litro', price: 115 },
      { size: 'Mediana', volume: '4 litros', price: 440 },
      { size: 'Grande', volume: '19 litros', price: 1800 },
    ],
  },
  {
    id: 4,
    color: 'Amarillo',
    description: 'Color amarillo brillante para un acabado alegre.',
    presentations: [
      { size: 'Pequeña', volume: '1 litro', price: 115 },
      { size: 'Mediana', volume: '4 litros', price: 440 },
      { size: 'Grande', volume: '19 litros', price: 1800 },
    ],
  },
];

const Products = () => {
  return (
    <>
      <section className='products-section valores' data-aos='fade-up'>
        <h2 className='productsTittle'>Productos</h2>
        <p>
          Contamos con una variedad de pinturas, destacando el color{' '}
          <strong>blanco</strong> como nuestro color principal. También
          ofrecemos colores rojo, café y amarillo.
        </p>

        {products.map((product) => (
          <div key={product.id} className='product-card'>
            <h3>
              Color: {product.color}{' '}
              {product.isPrincipal && (
                <span className='principal-label'>(Color Principal)</span>
              )}
            </h3>
            <p>{product.description}</p>

            {product.images && (
              <div className='images-container'>
                {product.images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`Pintura color ${product.color} imagen ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            <h4>Presentaciones y precios:</h4>
            <ul className='presentations-list'>
              {product.presentations.map((pres, i) => (
                <li key={i}>
                  {pres.size} ({pres.volume}) - ${pres.price} MXN
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <WhatsappButton />
    </>
  );
};

export default Products;
