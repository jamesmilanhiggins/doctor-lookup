var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(doctor) {
  $('.output-doctor').text(doctor);
};

$(document).ready(function() {
  myDoctor = new Doctor;
$('#doctor-info').submit(function(event) {
  event.preventDefault();
  var medicalIssue = $('#medical').val();
  $('.output').text(medicalIssue);
  });


});
