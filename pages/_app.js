import '../styles/global.css';
import { ThemeProvider } from 'styled-components';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
