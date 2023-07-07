import { Slot } from 'expo-router';
import { Provider } from '../context/auth';

const Layout = () => {
    return (
        <Provider>
            <Slot />
        </Provider>
    );
};

export default Layout;
