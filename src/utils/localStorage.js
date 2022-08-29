export const getDataFromLocal = key => localStorage.getItem(key)
export const setDataFromLocal = (key, value) => localStorage.setItem(key, value)
export const removeDataFromLocal = key => localStorage.removeItem(key)
export const clearLocal = () => localStorage.clear()