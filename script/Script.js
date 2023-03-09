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

  $('#dob-gender-form').on('submit', function(e) {
    e.preventDefault();
    if ($(this)[0].checkValidity()) {
        let dob = moment($('#dob-input').val(), 'dd/MM/YYYY');
        console.log(dob)
        // Extract the month, day, and year components of the date of birth
        
        let day = dob.date();
        let month = 1+ dob.month();
        let year = dob.year();
        let gender = $('#gender-input').val();
      
        let {weekdayNames,akan} = getAkanName(gender,day,month,year)
      
        // Construct the message to display
        let message = `You were born on a ${weekdayNames}: your Akan name is ${akan}`;

        // Display the message in the output element
        $('#dob-gender-output').text(message);
      
      
    }
     $(this).addClass('was-validated');
  });
      
      
      
function getAkanName(myGenderValue,dayOfBirth,monthOfBirth,yearOfBirth)	{
console.log(myGenderValue,dayOfBirth,monthOfBirth,yearOfBirth)
//formula to determine day of birth (Sunday = 1, Monday = 2)etc..
let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
      ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

//creating arrays of Akan names for males and females
let maleAkanNames = [
"Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
];

let femaleAkanNames = [
"Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
];
let weekdayNames = [
"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

//condition statement that picks date
akanIndex = dayOfWeekNumber==0?0:dayOfWeekNumber-1;
console.log(myGenderValue,dayOfWeekNumber,akanIndex)
if (myGenderValue == "male"){
return {weekdayNames:weekdayNames[akanIndex],akan: maleAkanNames[akanIndex]};
} else  {
 return {weekdayNames:weekdayNames[akanIndex],akan:femaleAkanNames[akanIndex]};
}

}	