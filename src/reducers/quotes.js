

export default function manageQuote(state = [], action) {

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

    return [
      ...state, {
        author: action.quote.author,
        content: action.quote.content,
        id: action.quote.id,
        votes: action.quote.votes + 1
    }]


    case 'DOWNVOTE_QUOTE':

    return [
      ...state, {
        author: action.quote.author,
        content: action.quote.content,
        id: action.quote.id,
        votes: action.quote.votes - 1
      }
    ]

  default:
    return state;
  }

}
