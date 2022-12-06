export const useCart = () => useState(() => []);
export const useAuth = () => useState(() => {
    isAuthorized: false;
})