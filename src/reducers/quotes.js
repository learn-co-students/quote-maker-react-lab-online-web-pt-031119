import uuid from 'uuid';

export default function manageQuote(state = [], action) {

  switch (action.type) {
    case 'ADD_QUOTE':

      return [{
        ...state,
        author: state.author,
        content: state.content,
        id: uuid(),
        votes: 0
      }];



    case 'REMOVE_QUOTE':
    let index = state.quotes.findIndex(quote => quote.id === action.id);
      return {
        ...state,
        author: state.author,
        content: state.content,
        id: uuid(),
        quotes: [...state.quotes.slice(0, index), ...state.quotes.slice(index + 1)]
      }



    case 'UPVOTE_QUOTE':

    return {
      ...state,
      author: state.author,
      content: state.content,
      id: uuid(),
      votes: state.votes + 1
    }


    case 'DOWNVOTE_QUOTE':

    return {
      ...state,
      author: state.author,
      content: state.content,
      id: uuid(),
      votes: state.votes - 1
    }
  


  default:
    return state;
  }

}
