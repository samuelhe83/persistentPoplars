const login = (email, password, callback) => {
  $.ajax({
    url: '/login',
    method: 'POST',
    data: {email: email, password: password},
    success: (data) => callback(data)
  });
};