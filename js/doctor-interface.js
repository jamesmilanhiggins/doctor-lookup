var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(medicalIssue, doctors) {

  doctors.forEach(function(doctor) {
    var first_name = doctor.profile.first_name;
    var last_name = doctor.profile.last_name;
    var title = doctor.profile.title;
    var bio = doctor.profile.bio;
  $('.output-medical').append("<p class='title'>" + first_name + " " + last_name + " " +  title + "</p>" + "<p class='bio'>" + bio + "</p>");

});
};

$(document).ready(function() {
  myDoctor = new Doctor();
$('#doctor-info').submit(function(event) {
  event.preventDefault();
  var medicalIssue = $('#medical').val();
  // var state = $('#state').val();

  myDoctor.getDoctors(medicalIssue, displayInfo);
  });
});
