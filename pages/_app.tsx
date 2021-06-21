import { Provider } from 'react-redux';
import store from '@/services/redux/store';
import { createWrapper } from 'next-redux-wrapper';

import 'tailwindcss/tailwind.css';
import '@/styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps ?
    await Component.getInitialProps(ctx) : {};
  return { pageProps };
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
