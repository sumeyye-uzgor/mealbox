import types from './types'

export const setMainMenus = (menus) => ({
    type: types.SET_MAIN_MENUS,
    payload: menus,
})

export const setOtherMenus = (menus) => ({
    type: types.SET_OTHER_MENUS,
    payload: menus,
})