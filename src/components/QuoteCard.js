import React from "react";
import quotes from "../reducers/quotes";

const QuoteCard = props => (
  <div>
    {console.log(props)}
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.content}</p>
          <footer>
            - author <cite title="Source Title">{props.author}</cite>
          </footer>
        </blockquote>
      </div>
      <div className="float-right">
        <h3>QuoteCard</h3>
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-primary">
            Upvote
          </button>
          <button type="button" className="btn btn-secondary">
            Downvote
          </button>
          <button
            onClick={props.removeQuote}
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>
);

export default QuoteCard;
