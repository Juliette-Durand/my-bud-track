import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
    return (
        <>
            <p>Layout public</p>
            <Outlet />
        </>
    );
}