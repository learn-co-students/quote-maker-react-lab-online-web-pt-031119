// TODO: Create action creators as defined in tests
export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote: quote
    } 
}

export const removeQuote = id => {
    // console.log(quote)
    return {
        type: 'REMOVE_QUOTE',
        quoteId: id
    }
}

export const upvoteQuote = id => {
    // console.log(quote)
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: id
    }
}

export const downvoteQuote = id => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: id
    }
}