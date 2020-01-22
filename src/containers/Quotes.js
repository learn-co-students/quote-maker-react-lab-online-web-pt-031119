import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';

class Quotes extends Component {
  

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {renderQuote}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

const renderQuote = this.props.quotes.map(quote => {
  return(<QuoteCard quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)
})

const mapStateToProps = (state) => {
  // state: { quotes: [ { content: 'Gently', author: 'Wesley', votes: 1, id: 1 } ] }
  return {quotes: state.quotes}

  // state.quotes.map(quote => {
  //   return quote:{
  //     content: quote.content,
  //     author: quote.author,
  //     votes: quote.votes,
  //     id: quote.id
  //   }
  // })
  
}

//add arguments to connect as needed
export default connect(mapStateToProps,{removeQuote,upvoteQuote,downvoteQuote})(Quotes);
