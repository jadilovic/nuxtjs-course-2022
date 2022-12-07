const cartItems: {name: string}[] = [];
const favoritesItems: {name: string}[] = [];

export const useCart = () => useState(() => cartItems);
export const useAuth = () =>
    useState(() => ({
        isAuthorized: false,
    }));
export const useVisitedPagesCount = () => useState(() => 0);
export const useFavorites = () => useState(() => favoritesItems);

export const saveToStorage = (name: string, data: unknown) => useState(() => {
    localStorage.setItem(name, JSON.stringify(data));
})

export const removeFromStorage = (storageName: string) => useState(() => {
    if (localStorage.getItem(storageName)) {
        const storageArray = JSON.parse(localStorage[storageName]);
        console.log(storageArray);
    }
}) 

// export function saveToStorage(name: string, data: unknown ) {
//   localStorage.setItem(name, JSON.stringify(data))
// }

export function loadFromStorage(name: string, value = null) {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage[name])
  }

  return value
}
