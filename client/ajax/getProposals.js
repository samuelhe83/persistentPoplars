var getProposals = (callback) => {
  $.ajax({
    url: '/proposals',
    method: 'GET',
    success: (data) => callback(data)
  });
};

// var getProposals = (callback) => {
//   callback();
// };



window.getProposals = getProposals;