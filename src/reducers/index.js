import * as actions from '../actions'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_GUESS':
      return Object.assign({}, state, {
        feedback: action.feedback,
        guesses: [...state.guesses, action.guess]
      })

    case 'RESTART_GAME':
      return Object.assign({}, state, initialState)

    case 'GIVE_FEEDBACK':
      return Object.assign({}, state, {
        feedback: action.feedback
      })

    case 'SET_AURAL':
      return Object.assign({}, state, {
        auralStatus: action.auralStatus
      })

    default:
      return state
  }
}
