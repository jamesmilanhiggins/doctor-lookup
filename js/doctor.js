var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayInfo) {

  // $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=${state}&skip=0&limit=100&user_key=${apiKey}`)
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue} &location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`)
  .then(function(response) {
    displayInfo(medicalIssue, response.data);
  });

};

exports.doctorModule = Doctor;
