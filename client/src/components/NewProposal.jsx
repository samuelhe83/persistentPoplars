import React from 'react';
import $ from 'jquery';

class NewProposal extends React.Component {
  constructor(props) {
    super(props);
    this.changeForm = this.changeForm.bind(this);
    this.newProposalAjax = this.newProposalAjax.bind(this);
    this.state = {
      title: null,
      description: null
    }

  }

  changeForm(e) {
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  newProposalAjax() {
    $.ajax({
      url: '/proposal',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        stage: 0,
        watch: 0,
        support: 0
      }),
      success: (data) => {console.log(data);}
    });
  }

  //HOW TO LINK COMPANY.

  render() {
    return (
      <div>
        <form onSubmit={this.newProposalAjax}>
          <input onChange={this.changeForm} name="title" type="text" placeholder="Title" /> <br/>
          <textarea onChange={this.changeForm} name="description" type="text" placeholder="Description" id="description"></textarea><br/>
          <button>Create New Proposal</button>
        </form>
      </div>
    );
  }
}

module.exports = NewProposal;
