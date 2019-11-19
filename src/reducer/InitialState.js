//Initial state for useReducer using React Hooks
export const initialState = {
  characters: {
    items: [],
    myteam: (JSON.parse(sessionStorage.getItem('MyTeam')) || []),
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