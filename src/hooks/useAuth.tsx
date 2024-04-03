import { useSelector } from 'react-redux';

export function useAuth() {
    const isAuthenticated = false;
    const user = "";

    return { isAuthenticated, user };
}