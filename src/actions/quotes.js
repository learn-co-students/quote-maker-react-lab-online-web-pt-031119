// TODO: Create action creators as defined in tests

export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = (quoteId: 0) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const upvoteQuote = (quoteId: 0) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

export const downvoteQuote = (quoteId: 0) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}
