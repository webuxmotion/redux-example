import {
  CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS
} from './../types'

const themes = [
  {
    value: 'light',
    buttonText: 'Темная тема',
    disabled: false
  },
  {
    value: 'dark',
    buttonText: 'Светлая тема',
    disabled: false
  }
]

const initialThemeState = themes[0]

export function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      const newTheme = state.value === 'light' ? themes[1] : themes[0]
      return newTheme
    case ENABLE_BUTTONS:
      return {...state, disabled: false}
    case DISABLE_BUTTONS:
      return {...state, disabled: true}
    default:
      return state
  }
}