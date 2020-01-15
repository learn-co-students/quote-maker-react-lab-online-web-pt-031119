import React from 'react';
// import { connect } from 'react-redux';







const QuoteCard = (props) =>



  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <textarea name="test" content="test quote" />
        <blockquote className="card-blockquote">
          <textarea name="quote test" content="testing this quote" />
          <textarea name="author test" content="test author" />
          <textarea name="author test2" content="authoring this test" />




          <p>{props.quote.content}</p>
          
          <footer> Author: <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.upvoteQuote(props.quote.id)}
          >
            Upvote 
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvoteQuote(props.quote.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"

          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="vote count" value={props.quote.votes}>Votes: {props.quote.votes}</div>

      </div>
    </div>
  </div>;



export default QuoteCard;
