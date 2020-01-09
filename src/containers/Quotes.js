import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  showCards = () => {
    this.props.quotes.map(q => {
      console.log(q)
      return <QuoteCard quote={q} remove={this.props.removeQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote}></QuoteCard>
    })
  }

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
              {this.showCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps,{removeQuote, upvoteQuote, downvoteQuote})(Quotes);
