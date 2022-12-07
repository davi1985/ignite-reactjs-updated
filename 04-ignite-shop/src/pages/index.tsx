import { useKeenSlider } from 'keen-slider/react';
import Head from 'next/head';
import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Iginte Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(({ id, name, price, imageUrl }) => (
          <Product
            className="keen-slider__slide"
            href={`product/${id}`}
            key={id}
            prefetch={false}
          >
            <Image
              src={imageUrl}
              width={520}
              height={480}
              alt=""
              loading="lazy"
            />

            <footer>
              <strong>{name}</strong>
              <span>{price}</span>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
