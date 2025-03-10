import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    const { removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center"></div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => (
                <QuoteCard
                  downvoteQuote={downvoteQuote}
                  upvoteQuote={upvoteQuote}
                  quote={quote}
                  id={quote.id}
                  key={quote.id}
                  content={quote.content}
                  author={quote.author}
                  removeQuote={removeQuote}
                />
              ))}

              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

//add arguments to connect as needed
export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote
})(Quotes);
