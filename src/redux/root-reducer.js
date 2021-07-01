import types from "./types"


const INITIAL_STATE = {
    mainMenus: null,
    otherMenus: null,
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
        default:
            return state
    }
}

export default rootReducer;