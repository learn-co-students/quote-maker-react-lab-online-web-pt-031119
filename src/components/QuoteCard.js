import React from 'react';


const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <textarea name="test" content="test quote" />
        <blockquote className="card-blockquote">
          <textarea name="quote test" content="testing this quote" />
          <textarea name="author test" content="test author" />
          <textarea name="author test2" content="authoring this test" />

          {console.log(props)}
          

          {/* <p>{Render Quote Content}</p> */}
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
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
        {console.log(props)}
      </div>
    </div>
  </div>;

export default QuoteCard;
