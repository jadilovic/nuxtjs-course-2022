export const useCart = () => useState(() => []);
export const useAuth = () =>
    useState(() => ({
        isAuthorized: false,
    }));
export const useVisitedPagesCount = () => useState(() => 0);