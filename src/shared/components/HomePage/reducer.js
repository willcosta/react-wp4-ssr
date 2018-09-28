import {
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_FAILED,
  SEARCH_REPOSITORIES_COMPLETE
} from './actions';

const defaultState = {
  loading: false,
  error: false,
  repos: {
    items: []
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return {
        ...state,
        loading: true
      };

    case SEARCH_REPOSITORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    case SEARCH_REPOSITORIES_COMPLETE:
      return {
        ...state,
        loading: false,
        repos: action.repos
      };

    default:
      return state;
  }
};

export default reducer;
