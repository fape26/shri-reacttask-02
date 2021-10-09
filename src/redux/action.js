export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const KEEP_VALUES = 'KEEP_VALUES';
export const RESET_VALUES = 'RESET_VALUES';

export const saveSettings = (savedSettings) => {
    return {
        type: SAVE_SETTINGS,
        savedSettings
    }
}

export const keepInputValues = (keepedValues) => {
    return {
        type: KEEP_VALUES,
        keepedValues
    }
}

export const resetInputValues = (resetValues) => {
    return {
        type: RESET_VALUES,
        resetValues
    }
}