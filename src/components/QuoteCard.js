import React from 'react';
import { connect } from 'react-redux';
// import { addQuote } from '../actions/quotes';




const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <textarea name="test" content="test quote" />
        <blockquote className="card-blockquote">
          <textarea name="quote test" content="testing this quote" />
          <textarea name="author test" content="test author" />
          <textarea name="author test2" content="authoring this test" />




          {/* <p>{Render Quote Content}</p> */}
          <p>{props.content}</p>
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
          <footer> Author: <cite title="Source Title">{props.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
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
        {/* <div>Votes: {Render Quote Votes}</div> */}

        <div className="vote count" content={props.votes}>Votes</div>
        {console.log(props)}
      </div>
    </div>
  </div>;

  // const mapStateToProps = state => {
  //   return {
  //     author: this.author,
  //     content: state.content,
  //     votes: state.votes
  //    }
  // }

export default connect()(QuoteCard);
