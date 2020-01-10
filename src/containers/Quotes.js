import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  // showCards = () => {
  //   console.log(this.props.quotes)
  //   this.props.quotes.map(q => {
  //     return <QuoteCard quote={q} remove={this.props.removeQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote}></QuoteCard>
  //   })
  // }

  render() {
    const quotes = this.props.quotes
    console.log(quotes)
    let allQuotes = quotes.map(q => {
      // debugger
      return <QuoteCard key={q.id} quote={q} remove={this.props.removeQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote}></QuoteCard>
    })
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
              {allQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps,{removeQuote, upvoteQuote, downvoteQuote})(Quotes);
