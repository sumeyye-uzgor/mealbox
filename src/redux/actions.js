import types from './types'

export const setMainMenus = (menus) => ({
    type: types.SET_MAIN_MENUS,
    payload: menus,
})

export const setOtherMenus = (menus) => ({
    type: types.SET_OTHER_MENUS,
    payload: menus,
})
export const addSelectedItem = (item) => ({
    type: types.ADD_SELECTED_ITEM,
    payload: item,
})
export const removeSelectedItem = (item) => ({
    type: types.REMOVE_SELECTED_ITEM,
    payload: item,
})
export const emptySelectedItem = () => ({
    type: types.EMPTY_SELECTED_ITEM,
})
export const setSelectedMenu = (menu) => ({
    type: types.SET_SELECTED_MENU,
    payload: menu,
})
export const setSelectedDiscountMenu = (menu) => ({
    type: types.SET_SELECTED_DISCOUNT_MENU,
    payload: menu,
})
export const setDiscountSelect = (isDisc) => ({
    type: types.SET_DISCOUNT_SELECT,
    payload: isDisc,
})
export const openToast = (message) => ({
    type: types.OPEN_TOAST,
    payload: message,
})
export const closeToast = () => ({
    type: types.CLOSE_TOAST,
})
export const setLastLocation = (location) => ({
    type: types.SET_LAST_LOCATION,
    payload: location,
})