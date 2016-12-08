var ProposalListEntry = (props) => {

  var timeType = (stage, date) => {
    var expirationDate = moment(date).add(2, 'weeks');


    if (stage === 'viability') {
      return 'Expires ' + moment(date).to(expirationDate);
    } else {
      return moment(date).fromNow();
    }
  }

  return (
   <tr>
     <th>{props.title}</th>
     <th>{props.stage}</th>
     <th>{timeType(props.stage, props.date)}</th>
     <th>{props.supporters + '/' + props.watchers}</th>
     <th><img src="somePicture" /></th>
   </tr>
  );
};

window.ProposalListEntry = ProposalListEntry;