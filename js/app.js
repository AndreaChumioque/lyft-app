$(document).ready(function() {
  fadeSplash();
  $('#signup, #login, #finish-signup, #back, #finish-verification').click(goTo);
  $('#finish-signup, #resend').click(generateCode);
  $('#countries a').click(changeFlag);
  $('#phoneNumber').keyup(validateSignup);
  $('#verification').keyup(verifyCode);
  $('#firstName, #lastName, #email').keyup(enableCheck);
  validateComplete();
  
  function fadeSplash() {
    if (window.location.href === 'https://andrea-isabel.github.io/lyft-app/') {
      setTimeout(function() {
        $('body').fadeOut(1000, function() {
          window.location.href = 'views/home.html';
        });
      }, 2000);
    }
  }

  function goTo(event) {
    $('body').fadeOut(1000, function() {
      window.location.href = $(event.target).closest('button').attr('data-target') + '.html';
    });
  }

  function changeFlag(event) {
    $('#selected-country img').attr('src', '../assets/images/flag-' + $(event.target).closest('a').attr('id') + '.png');
    $('#phoneNumber').val($(event.target).closest('a').attr('data-prefix'));
  }

  function validateSignup(event) {
    var code = event.keyCode;
    if (code >= 48 && code <= 57 && $(this).val().length === 10) {
      $('#finish-signup').prop('disabled', false);
    } else if (code < 48 || code > 57 || $(this).val().length > 10) {
      $('#phoneNumber').val($(this).val().slice(0, $(this).val().length - 1));
    }
  }

  function generateCode() {
    var randomCode = Math.floor(Math.random() * (999 - 100 + 1) + 100);;
    localStorage.verificationCode = randomCode;
    alert('LAB - ' + randomCode);
  }

  function verifyCode() {
    if ($(this).val() === localStorage.verificationCode && $(this).val().length === 3) {
      $('#finish-verification').prop('disabled', false);
    } else {
      $('#finish-verification').prop('disabled', true);
    }
  }

  function enableCheck() {
    if ($('#firstName').val() && $('#lastName').val() && $('#email').val()) {
      $('#check-terms').prop('disabled', false);
    } else {
      $('#check-terms').prop('disabled', true);
    }
  }

  function validateComplete() {
    if (!($('#check-terms').is(':disabled'))) {
      $('#complete').prop('disabled', false);
    } else {
      $('#complete').prop('disabled', true);
    }
  }
});