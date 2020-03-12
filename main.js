// START CODING BELOW!!
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAFdyP4v-yKQXrtx-m-Wo8AassfVrf75MU',
  authDomain: 'denverbootcamp-21006.firebaseapp.com',
  databaseURL: 'https://denverbootcamp-21006.firebaseio.com',
  projectId: 'denverbootcamp-21006',
  storageBucket: 'denverbootcamp-21006.appspot.com',
  messagingSenderId: '36508316501',
  appId: '1:36508316501:web:f8b6688f025a9e59eeb5dc',
  measurementId: 'G-HDVEGDNXZE'
  // apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
  // authDomain: "fir-recent-user.firebaseapp.com",
  // databaseURL: "https://fir-recent-user.firebaseio.com",
  // storageBucket: "fir-recent-user.appspot.com"
  // apiKey: "AIzaSyA3L6TkyFRcZdbMDCmcKSZB6vtUUe2xDuU",
  // authDomain: "project-3701437879439973475.firebaseapp.com",
  // databaseURL: "https://project-3701437879439973475.firebaseio.com",
  // projectId: "project-3701437879439973475",
  // storageBucket: "project-3701437879439973475.appspot.com",
  // messagingSenderId: "919384740852",
  // appId: "1:919384740852:web:376eead307f44e4550dfa1"
};
firebase.initializeApp(config);
// Create a variable to reference the database.
var database = firebase.database();
// Initial Values
var name = '';
var email = '';
var age = 0;
var comment = '';
// Capture Button Click
$('#add-user').on('click', function(event) {
  event.preventDefault();
  // Grabbed values from text-boxes
  newUserName = $('#name-input')
    .val()
    .trim();
  email = $('#email-input')
    .val()
    .trim();
  startDate = $('#age-input')
    .val()
    .trim();
  monthlyRate = $('#comment-input')
    .val()
    .trim();
  // Code for "Setting values in the database"
  // database.ref().push({
  database.ref().push({
    name: newUserName,
    role: role,
    age: startDate,
    comment: monthlyRate
  });
});
// Firebase watcher + initial loader HINT: .on("value")
database.ref().on(
  'child_added',
  function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().email);
    console.log(snapshot.val().age);
    console.log(snapshot.val().comment);
    // Change the HTML to reflect
    $('#name-display').text(snapshot.val().name);
    $('#email-display').text(snapshot.val().email);
    $('#age-display').text(snapshot.val().age);
    $('#comment-display').text(snapshot.val().comment);
    // Handle the errors
  },
  function(errorObject) {
    console.log('Errors handled: ' + errorObject.code);
  }
);
