import { Header } from '../components/header/Header';
import { Outlet } from 'react-router-dom'

export const PrivateLayout = () => {
    return (
        <div id="global_container">
            <Header />
            <main id="content_container">
                <Outlet />
            </main>
        </div>
    );
}