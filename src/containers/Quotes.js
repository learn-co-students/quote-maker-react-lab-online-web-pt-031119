import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


//add mapDispatchToProp, add upvote and downvote

class Quotes extends Component {

  render() {
    const { addQuote, removeQuote, upvoteQuote, downvoteQuote, quotes } = this.props
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               
               {quotes.map(quote => <QuoteCard addQuote={addQuote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ( { quotes: state.quotes } )
}

//add arguments to connect as needed
export default connect(mapStateToProps, { addQuote, removeQuote, upvoteQuote, downvoteQuote } )(Quotes);
