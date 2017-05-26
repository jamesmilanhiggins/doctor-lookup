var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, state, displayInfo) {


//
// https://api.betterdoctor.com/2016-03-01/doctors?query=Cancer&location=AL&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=710fb57a4d5e3308eb9bde4360619ce0

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}
  location=${state}&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`)


  // $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue} location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=1&user_key=${apiKey}`)
  .then(function(response) {
    displayInfo(medicalIssue, state, response.data);
  });
};

exports.doctorModule = Doctor;
