var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(medicalIssue, doctors) {

  doctors.forEach(function(doctor) {

    var first_name = doctor.profile.first_name;
    var last_name = doctor.profile.last_name;
    var title = doctor.profile.title;
    var bio = doctor.profile.bio;
    // var address =
    // console.log(doctor.practices[0].lat);
    // var lat = doctor.practices[0].lat;
    // var lon = doctor.practices[0].lon;
  $('.output-medical').append("<div class='info'>" + "<p class='title'>" + first_name + " " + last_name + " " +  title + "</p>" + "<p class='bio'>" + bio + "</p>" + "</div>");

  });
};

$(document).ready(function() {
  myDoctor = new Doctor();
$('#doctor-info').submit(function(event) {
  event.preventDefault();
  $('.output-medical').text("");
  var medicalIssue = $('#medical').val();
  // var state = $('#state').val();

  myDoctor.getDoctors(medicalIssue, displayInfo);
  });
});
