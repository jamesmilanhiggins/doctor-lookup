var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayInfo) {

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue} &location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`)
  .then(function(response) {
    displayInfo(medicalIssue, response.data);
  });
  // .fail(function(error){
  //  });
};
    // an array of all doctors
// response.profile.first_name
// response.practices[?].name
// response.profile - for all info then display parts on front end?

// console.log(response.data[0].profile.first_name);
// console.log(response.data);


//Gets an array of objects, could push this and on front end loop through them displaying profile.firts_name

exports.doctorModule = Doctor;
