import { Outlet } from 'react-router-dom'

export const PrivateLayout = () => {
    return (
        <>
            <p>Layout privé</p>
            <Outlet />
        </>
    );
}