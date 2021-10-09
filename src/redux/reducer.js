import { SAVE_SETTINGS, KEEP_VALUES, RESET_VALUES } from "./action"

const initialState = {
    settings: {},
    temporary: {
        git: '',
        command: '',
        branch: '',
        timer: ''
    }
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SETTINGS:
            return { 
                ...state, 
                settings: {...state.settings, ...action.savedSettings}
            }
        case KEEP_VALUES:
            return {
                ...state,
                temporary: {...state.temporary, ...action.keepedValues}
            }
        case RESET_VALUES:
        return {
            ...state,
            temporary: {...initialState.temporary}
        }
        default : return state
    }
}