var name = '';
var role = '';
var date = 0;
var salary = '';

// Capture Button Click
$('#add-user').on('click', function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $('#name-input')
    .val()
    .trim();

  role = $('#role-input')
    .val()
    .trim();
  date = $('#date-input')
    .val()
    .trim();
  salary = $('#rate-input')
    .val()
    .trim();

  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    date: date,
    salary: salary,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

  $('#name-input').val('');
  $('#role-input').val('');
  $('#date-input').val('');
  $('#rate-input').val('');
});

// Firebase watcher .on("child_added"
database.ref().on(
  'child_added',
  function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.date);
    console.log(sv.salary);

    // Change the HTML to reflect
    // $("#name-display").text(sv.name);
    // $("#role-input").text(sv.role);
    // $("#date-inputy").text(sv.date);
    // $("#rate-input").text(sv.salary);
    var namedisplay = $('<td>');
    var roledisplay = $('<td>');
    var startdisplay = $('<td>');
    var monthratedisplay = $('<td>');
    var monthworkeddisplay = $('<td>');
    var totalbilldisplay = $('<td>');

    namedisplay.text(sv.name);
    roledisplay.text(sv.role);
    startdisplay.text(sv.date);
    monthratedisplay.text(sv.salary);
    monthworkeddisplay.text('');
    totalbilldisplay.text('');

    $('#empbody').append(namedisplay);

    // Handle the errors
  },
  function(errorObject) {
    console.log('Errors handled: ' + errorObject.code);
  }
);
