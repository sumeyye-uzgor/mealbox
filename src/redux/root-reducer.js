import types from "./types"


const INITIAL_STATE = {
    mainMenus: null,
    otherMenus: null,
    isDiscountSelection: false,
    selectedItems: null,
    selectedMenu: null,
    selectedDiscountMenu: null,
    isToastOpen: false,
    toastMessage: null,
    lastLocation: '/',
}
const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_MAIN_MENUS:
            return {
                ...state,
                mainMenus: action.payload
            }
        case types.SET_OTHER_MENUS:
            return {
                ...state,
                otherMenus: action.payload
            }
        case types.SET_SELECTED_MENU:
            return {
                ...state,
                isMenuSelection: true,
                selectedMenu: action.payload,
            }
        case types.SET_SELECTED_DISCOUNT_MENU:
            return {
                ...state,
                selectedDiscountMenu: action.payload,
            }
        case types.ADD_SELECTED_ITEM:
            return {
                ...state,
                selectedItems: state.selectedItems ? (!state.selectedItems.find(item => item.name === action.payload.name) ? [...state.selectedItems, action.payload] : state.selectedItems) : [action.payload]
            }

        case types.REMOVE_SELECTED_ITEM:
            return {
                ...state,
                selectedItems: state.selectedItems.filter(
                    item => item.name !== action.payload.name
                )
            }
        case types.EMPTY_SELECTED_ITEM:
            return {
                ...state,
                selectedItems: null
            }
        case types.OPEN_TOAST:
            return {
                ...state,
                isToastOpen: true,
                toastMessage: action.payload
            }
        case types.CLOSE_TOAST:
            return {
                ...state,
                isToastOpen: false,
                toastMessage: null,
            }
        case types.SET_LAST_LOCATION:
            return {
                ...state,
                lastLocation: action.payload
            }
        case types.ADD_DISCOUNT_MENU_ITEM:
            const menu = state.selectedDiscountMenu
            return {
                ...state,
                selectedDiscountMenu: { ...menu, items: menu.items ? [...menu.items, action.payload] : [action.payload] }
            }
        case types.REMOVE_DISCOUNT_MENU_ITEM:
            const menu2 = state.selectedDiscountMenu
            return {
                ...state,
                selectedDiscountMenu: { ...menu2, items: menu2.items.filter(item => item.name !== action.payload.name) }
            }
        case types.REMOVE_DISCOUNT_MENU:
            return {
                ...state,
                selectedDiscountMenu: null,
            }
        default:
            return state
    }
}

export default rootReducer;