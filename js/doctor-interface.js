var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(medicalIssue, state, doctors) {

  doctors.forEach(function(doctor) {

    var first_name = doctor.profile.first_name;
    var last_name = doctor.profile.last_name;
    var title = doctor.profile.title;
    var bio = doctor.profile.bio;
    var image = doctor.profile.image_url;
    // var lat = doctor.practices[0].lat;
    // console.log(doctor);
    // var lon = doctor.practices[0].lon;
  // $('.output-medical').append("<p class='title'>" + first_name + " " + last_name + ", " +  title + "</p>" + "<p class='bio'>" + bio + "</p>" + "<hr>");
  $('.output-medical').append("<p class='title'>" + first_name + " " + last_name + ", " +  title + "</p>" + "<p class='bio'>" + bio + "</p>" + "<img class='image' src=" + "'" + image + "'" + ">" + "<hr>");

  });
  // $('.output-doctor').append("<img class='image' src=" + "'" + image + "'" + ">");
  // $('.output-doctor').append("<img class='image' src="`${doctor.profile.image_url}`" >");
  //
  // });
};

$(document).ready(function() {
  myDoctor = new Doctor();
$('#doctor-info').submit(function(event) {
  event.preventDefault();
  $('.output-medical').text("");
  var medicalIssue = $('#medical').val();
  var state = $('#state').val();
  console.log(state);

  myDoctor.getDoctors(medicalIssue, state, displayInfo);
  });
});
