import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';

import {
  ButtonsContainer,
  ImageContainer,
  LoadingContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);
  const { isFallback, push } = useRouter();

  if (isFallback) {
    return (
      <LoadingContainer>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#00875f"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </LoadingContainer>
    );
  }

  const handleBuyProduct = async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const { data } = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao realizar Checkout');
    }
  };

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <ButtonsContainer>
            <button className="cancel" onClick={() => push('/')}>
              Cancelar
            </button>

            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleBuyProduct}
            >
              Comprar agora
            </button>
          </ButtonsContainer>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    {
      params: { id: 'prod_MLH5Wy0Y97hDAC' },
    },
  ],
  fallback: true,
});

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
