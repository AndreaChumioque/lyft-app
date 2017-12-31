$(document).ready(function() {
  fadeSplash();
  $('#signup, #login').click(homeOptions);

  function fadeSplash() {
    if (window.location.href === 'file:///D:/Andrea/Laboratoria/Sprint3/Retos%203/lyft-app/index.html') {
      setTimeout(function() {
        $('body').fadeOut(1000, function() {
          window.location.href = 'views/home.html';
        });
      }, 2000);
    }
  }

  function homeOptions(event) {
    $('body').fadeOut(1000, function() {
      window.location.href = $(event.target).attr('id') + '.html';
    });
  }
});