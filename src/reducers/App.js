import {} from '../actions'

const initialState = {}

// Vars

const appReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'app_action_start':
      return {}
    default:
      return state
  }
}

export default appReducer
