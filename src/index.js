import './styles.css'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { rootReducer } from './redux/reducers'
import { increment, decrement, asyncIncrement, toggleTheme } from './redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

window.store = store

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
  store.dispatch(toggleTheme())
})

store.subscribe(() => {
  const state = store.getState()

  counter.textContent = state.counter
  document.body.className = state.theme.value
  themeBtn.textContent = state.theme.buttonText;

  [addBtn, subBtn, themeBtn].forEach(btn => btn.disabled = state.theme.disabled)
})

store.dispatch({ type: 'INIT_APPLICATION' })