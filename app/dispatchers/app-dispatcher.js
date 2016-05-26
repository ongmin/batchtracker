import { Dispatcher } from 'flux'
const flux = new Dispatcher() // instantiate a new dispatcher

export function register (callback) {
  return flux.register(callback) // register callback
}

export function dispatch (actionType, action) {
  console.log(actionType)
  flux.dispatch(actionType, action) // dispatch the action
}
