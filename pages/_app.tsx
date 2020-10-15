import { AppProps } from 'next/app';
import '../components/shared/global';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />;
}

export default MyApp;
