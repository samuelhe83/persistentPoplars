import React from 'react';
import ProposalListEntry from './ProposalListEntry.jsx';
import ButtonGroup from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';

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
    </table>
  );


};


module.exports = ProposalList;