var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayInfo) {

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue} location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`)
  .then(function(response) {
    displayInfo(medicalIssue, response.data);
  });
};

exports.doctorModule = Doctor;
