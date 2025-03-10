import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addQuote } from "../actions/quotes";

class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      content: "",
      author: ""
    };
  }

  handleOnChange = event => {
    // event.target.name -> content and author
    // event.target.value -> user's input
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // we're passing this to the reducer
    this.props.addQuote({ ...this.state, id: uuid() });
    this.setState({
      content: "",
      author: ""
    });
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form
                  onSubmit={event => this.handleOnSubmit(event)}
                  className="form-horizontal"
                >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">
                      Quote
                    </label>
                    <div className="col-md-5">
                      <textarea
                        onChange={this.handleOnChange}
                        name="content"
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">
                      Author
                    </label>
                    <div className="col-md-5">
                      <input
                        onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { addQuote })(QuoteForm);
