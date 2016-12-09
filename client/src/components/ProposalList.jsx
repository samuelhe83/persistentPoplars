var ProposalList = (props) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Stage</th>
          <th>Time</th>
          <th>Supporters/Watchers</th>
        </tr>
      </thead>
      <tbody>
        {props.proposals.map(proposal => {
          return (<ProposalListEntry
            title={proposal.title}
            date={proposal.date}
            stage={proposal.stage}
            supporters={proposal.supporters}
            watchers={proposal.watchers} />
          );
        })
      }
      </tbody>
    </table>
  );


};


window.ProposalList = ProposalList;