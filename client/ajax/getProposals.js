var getProposals = (callback) => {
  $.ajax({
    url: '/proposals',
    success: (data) => callback(data)
  });
};

var getProposals (callback) => {
  callback()
}



window.getProposals = getProposals