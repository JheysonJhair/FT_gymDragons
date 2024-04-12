import { useSelector } from 'react-redux';

export function useAuth() {
    const isAuthenticated = true;
    const user = "";

    return { isAuthenticated, user };
}