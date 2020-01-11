

export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':

      return [
        ...state, {
          author: action.quote.author,
          content: action.quote.content,
          id: action.quote.id,
          votes: action.quote.votes
        }
      ];

    case 'REMOVE_QUOTE':
      let index = state.filter(quote => quote.id !== action.quoteId);

        return index


    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            // author: quote.author,
            // content: quote.content,
            // id: quote.id,
            votes: quote.votes += 1
          }
        } else {
            return quote
        }
      }
  )



  case 'DOWNVOTE_QUOTE':
    return state.map(quote => {
      if (quote.id === action.quoteId && quote.votes > 0) {
        return {
          ...quote,
          // author: quote.author,
          // content: quote.content,
          // id: quote.id,
          votes: quote.votes -= 1
        }
      } else {
          return quote
      }
    }
  )

  default:
    return state;
  }

}
