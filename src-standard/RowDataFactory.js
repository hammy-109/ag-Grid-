import RefData from './RefData';

export default class RowDataFactory {

  createRowData() {
    var rowData = [];

    for (var i = 0; i < RefData.FIRST_NAMES.length; i++) {
      var cityData = RefData.CITY[i];
      rowData.push({
        name: RefData.FIRST_NAMES[i] + ' ' + RefData.LAST_NAMES[i],
        skills: {
          android: Math.random() < 0.4,
          html5: Math.random() < 0.4,
          mac: Math.random() < 0.4,
          windows: Math.random() < 0.4,
          css: Math.random() < 0.4
        },
        dob: RefData.DOB[i],
        address: RefData.ADDRESSES[i],
        years: Math.round(Math.random() * 100),
        proficiency: Math.round(Math.random() * 100),
        city: cityData.city,
       // continent: countryData.continent,
        //language: countryData.language,
        mobile: this.createRandomPhoneNumber(),
        landline: this.createRandomPhoneNumber(),
        age: RefData.AGE[i],
        gender: RefData.GENDER[i]
      });
    }

    return rowData;
  }

  createRandomPhoneNumber() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
      result += Math.round(Math.random() * 10);
      if (i === 2 || i === 5 || i === 8) {
        result += ' ';
      }
    }
    return result;
  }

  creatAge() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
      result += Math.round(Math.random() * 30);
      if (i === 2 || i === 5 || i === 8) {
        result += ' ';
      }
    }
    return result;
  }

}