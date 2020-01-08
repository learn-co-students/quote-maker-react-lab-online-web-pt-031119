import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => this.props.quotes.map(quote => 
      <QuoteCard
        key={quote.id}
        quote={quote}
        remove={() => this.handleRemoveQuote(quote.id)}
        upvote={() => this.handleUpvoteQuote(quote.id)}
        downvote={() => this.handleDownvoteQuote(quote.id)}
      />
  )

  handleRemoveQuote = id => {
    this.props.removeQuote(id)
  }

  handleUpvoteQuote = id => {
    this.props.upvoteQuote(id)
  }

  handleDownvoteQuote = id => {
    this.props.downvoteQuote(id)
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
