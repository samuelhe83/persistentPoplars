'use strict';

var getProposals = function getProposals(callback) {
  $.ajax({
    url: '/proposals',
    method: 'GET',
    success: function success(data) {
      return callback(data);
    }
  });
};

// var getProposals = (callback) => {
//   callback();
// };


window.getProposals = getProposals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FqYXgvZ2V0UHJvcG9zYWxzLmpzIl0sIm5hbWVzIjpbImdldFByb3Bvc2FscyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGF0YSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CQyxJQUFFQyxJQUFGLENBQU87QUFDTEMsU0FBSyxZQURBO0FBRUxDLFlBQVEsS0FGSDtBQUdMQyxhQUFTLGlCQUFDQyxJQUFEO0FBQUEsYUFBVU4sU0FBU00sSUFBVCxDQUFWO0FBQUE7QUFISixHQUFQO0FBS0QsQ0FORDs7QUFRQTtBQUNBO0FBQ0E7OztBQUlBQyxPQUFPUixZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJnZXRQcm9wb3NhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2V0UHJvcG9zYWxzID0gKGNhbGxiYWNrKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsOiAnL3Byb3Bvc2FscycsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBzdWNjZXNzOiAoZGF0YSkgPT4gY2FsbGJhY2soZGF0YSlcbiAgfSk7XG59O1xuXG4vLyB2YXIgZ2V0UHJvcG9zYWxzID0gKGNhbGxiYWNrKSA9PiB7XG4vLyAgIGNhbGxiYWNrKCk7XG4vLyB9O1xuXG5cblxud2luZG93LmdldFByb3Bvc2FscyA9IGdldFByb3Bvc2FsczsiXX0=