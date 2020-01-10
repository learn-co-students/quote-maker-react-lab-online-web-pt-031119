export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      console.log(action.quote)
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      let newArray = []
      state.map(q => {
        if(q.id !== action.quoteId){
          newArray.push(q)
        }
      })
      return newArray

    case 'UPVOTE_QUOTE':
     return state.map(q => {
        if(q.id === action.quoteId){
          // debugger
          return {...q, votes: q.votes += 1}
        } else {
          return q
        }
      })

      case 'DOWNVOTE_QUOTE':
        return state.map(q => {
          console.log(action.quoteId)
          if(q.id === action.quoteId && q.votes > 0){
            return {...q, votes: q.votes -= 1} 
          } else {
            return q
          }
        })
    default:
      return state;
  }
}
