export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      console.log(action.quote)
      return {quotes: [...state, action.quote]}
    default:
      return state;
  }
}
