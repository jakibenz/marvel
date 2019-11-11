//Initial state for useReducer using React Hooks
export const initialState = {
  characters: {
    items: [],
    myteam: [],
    filter: '',
    isLoading: false,
    isError: false
  },
  character: {
    current: {},
    comics: {},
    series: {},
    stories: {},
    isComicsLoaded: 'false'
  }
}