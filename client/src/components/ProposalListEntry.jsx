import React from 'react';
import moment from 'moment';
import MenuItem from 'react-bootstrap';

var ProposalListEntry = (props) => {
  console.log(props);

  var timeType = (stage, date) => {
    var expirationDate = moment(date).add(2, 'weeks');


    if (stage === 0) {
      return 'Expires ' + moment(date).to(expirationDate);
    } else {
      return 'Created ' + moment(date).fromNow();
    }
  };

  var stageConversion = (stage) => {
    if (stage === 0) {
      return 'Viability';
    } else if (stage === 1) {
      return 'Exploratory';
    } else if (stage === 2) {
      return 'Company Engagement';
    } else if (stage === 3) {
      return 'Post Company Engagement';
    }
  };

  return (
      <tr>
       <td>{props.title}</td>
       <td>{stageConversion(props.stage)}</td>
       <td>{timeType(props.stage, props.date)}</td>
       <td>{props.supporters + '/' + props.watchers}</td>
     </tr>
  );
};

module.exports = ProposalListEntry;