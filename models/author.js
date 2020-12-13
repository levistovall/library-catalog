const { DateTime } = require("luxon");

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

// Virtual for author's date of death, formatted
AuthorSchema
.virtual('formatted_date_of_death')
.get(function () {
  var dod_string = DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
  if(dod_string == 'Invalid DateTime') {
    dod_string = ' ';
  }
  return dod_string;
});

// Virtual for author's date of birth, formatted
AuthorSchema
.virtual('formatted_date_of_birth')
.get(function () {
  var dob_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
  if(dob_string == 'Invalid DateTime') {
    dob_string = ' ';
  }
  return dob_string;
});

// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
  return (this.formatted_date_of_birth + '-' + this.formatted_date_of_death);
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);

