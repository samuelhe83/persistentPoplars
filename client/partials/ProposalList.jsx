class ProposalList extends React.Components {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <table>
        <thead>
          <th>Title</th>
          <th>Stage</th>
          <th>Time</th>
          <th>Supporters/Watchers</th>
          <th>Momentum</th>
        </thead>
        <tbody>
          {{props.proposals.map(proposal => {
            <ProposalListEntry date={{proposal.date}} stage={{proposal.stage}} supporters={{proposal.supporters}} watchers={{proposal.watchers}}>
          })}}
        </tbody>
      </table>
    );

  }
};


window.ProposalList = ProposalList;