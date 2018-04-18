export const ADD_LIST = 'ADD_LIST'
export const addList = title => ({
  type: ADD_LIST,
  title
})

export const ADD_CARD = 'ADD_CARD'
export const addCard = (text, listIndex) => ({
  type: ADD_CARD,
  text,
  listIndex
})

export const restartGame = () => ({
  type: 'RESTART_GAME'
})

// export const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = (feedback, guess) => ({
  type: 'MAKE_GUESS',
  feedback,
  guess
})

export const setInvalidFeedback = feedback => ({
  type: 'GIVE_FEEDBACK',
  feedback
})

export const setAural = auralStatus => ({
  type: 'SET_AURAL',
  auralStatus
})
