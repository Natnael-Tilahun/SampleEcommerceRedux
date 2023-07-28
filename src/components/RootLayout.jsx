import { Outlet } from 'react-router-dom';
import NavBarPanel from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/Store';

export const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};
