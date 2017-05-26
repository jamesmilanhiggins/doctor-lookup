var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(medicalIssue, doctors) {
  // $('.output-doctor').text(`${medicalIssue} ${docotorName} doctors:`);
  // $('.output-medical').append("<li>" + bike.stolen_location + " " + bike.title + " " + bike.frame_colors + "</li>");
  doctors.forEach(function(doctor) {
    var first_name = doctor.profile.first_name;
  console.log(first_name);
  // push to an array? or li each here 
});
};

$(document).ready(function() {
  myDoctor = new Doctor();
$('#doctor-info').submit(function(event) {
  event.preventDefault();
  var medicalIssue = $('#medical').val();
  // var zipCode = $('#zip').val();
  // $('.output').text(medicalIssue);
  myDoctor.getDoctors(medicalIssue, displayInfo);
  });
});
