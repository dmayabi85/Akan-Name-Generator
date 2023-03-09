$(document).ready(function() {
    $('#dob-input').datepicker({
      format: 'dd/MM/yyyy',
      endDate: '-0d',
      autoclose: true,
      todayHighlight: true
    });
    $('#clear-btn').click(function() {
      $('#dob-gender-form')[0].reset();
      $('#dob-gender-form').removeClass('was-validated');
      $('#dob-gender-output').empty();
    });

  });