export default function reducer(state, action) {

  switch (action.type) {
    case 'DELETE_CHARACTER_TO_TEAM':
      return {
        ...state,
        characters: {
          ...state.characters,
          myteam: action.payload
        },
      }
    case 'ADD_CHARACTER_TO_TEAM':
      return {
        ...state,
        characters: {
          ...state.characters,
          myteam: state.characters.myteam.concat(action.payload)
        },
      }
    case 'FILTER_CHARACTERS_SUCCESS':
      return {
        ...state,
        characters: {
          ...state.characters,
          items: action.characters,
          isLoading: false,
          isError: false
        },
      }
    case 'FILTER_CHARACTERS_REQUEST':
      return {
        ...state,
        characters: {
          ...state.characters,
          filter: action.payload,
          isLoading: true,
        },
      }
    case 'CLOSE_CHARACTER_MODAL':
      return {
        ...state,
        character: {
          ...state.character,
          current: {},
          isComicsLoaded: 'false',
        }
      }
    case 'GET_CURRENT_SUCCESS':
      return {
        ...state,
        character: {
          ...state.character,
          comics: action.comics,
          series: action.series,
          stories: action.stories,
          isComicsLoaded: 'true',
        }
      }
    case 'GET_CURRENT_REQUEST':
      return {
        ...state,
        character: {
          ...state.character,
          isComicsLoaded: 'false',
          current: action.payload,
        }
      }
    case 'LOAD_ALL_CHARACTERS_SUCCESS':
      return {
        ...state,
        characters: {
          ...state.characters,
          items: state.characters.items.concat(action.characters),
          isLoading: false,
          isError: false
        }
      }
    case 'LOAD_ALL_CHARACTERS_REQUEST':
      return {
        ...state,
        characters: {
          ...state.characters,
          isLoading: true
        }
      }
    case 'LOAD_ALL_CHARACTERS_FAIL':
      return {
        ...state,
        characters: {
          ...state.characters,
          isLoading: false,
          isError: true
        }
      }
    default:
      throw Error;
  }
}
