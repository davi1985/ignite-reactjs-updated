import { AppProps } from 'next/app';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import NextNProgress from 'nextjs-progressbar';

import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app';
import Link from 'next/link';

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logo} alt="" />
        </Link>
      </Header>

      <NextNProgress
        color="#00875f"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </Container>
  );
};

export default App;
