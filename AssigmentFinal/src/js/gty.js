function validationForm()
{
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var postalCode = document.getElementById('postalCode').value;
  var province = document.getElementById('province').value;
  var preference = document.getElementById('preference').value;
  var bedrooms = document.getElementById('bedrooms').value;
  var priceFilter = document.getElementById('priceFilter').value;
  var email = document.getElementById('email').value;

  if (!firstName || !lastName || !address || !city || !postalCode || !province || !preference || !bedrooms || !priceFilter || !email)
  {
    alert('All the information MUST be filled')
    return false;
  }

  var postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  if (!postalCodePattern.test(postalCode)) {
    alert('Postal code must be like "A0A 0A0"');
    return false;
  }

  var provinces = ['QC', 'ON', 'MN', 'SK', 'AB', 'BC'];
  if (!provinces.includes(province)) {
    alert('Province must be one of QC, ON, MN, SK, AB, or BC');
    return false;
  }

  var opcions = ['house', 'condominium'];
  if (!opcions.includes(preference)) {
    alert('Preference must be one of house or condominium');
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Email must be a valid email address.');
    return false;
  }

  var bedroom = parseInt(bedrooms);
  if (isNaN(bedroom) || bedroom < 1) {
    alert('bedrooms must be a number and should be at least 1.');
    return false;
  }

  var priceFilters = parseInt(priceFilter);
  if (isNaN(priceFilters) || priceFilters < 100000) {
    alert('priceFilter must be a number and should be at least 100.000 dolars.');
    return false;
  }


  return true;
}


function displayCustomerInfo() {

  if (!validationForm())
  {
    return;
  }

  alert('Thanks for registering with our website, your customerrecord was created successfully.');
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var postalCode = document.getElementById('postalCode').value;
    var province = document.getElementById('province').value;
    var preference = document.getElementById('preference').value;
    var bedrooms = document.getElementById('bedrooms').value;
    var priceFilter = document.getElementById('priceFilter').value;
    var email = document.getElementById('email').value;

    document.write(firstName);
    document.write(lastName);
    document.write(address);

    document.write(city);
    document.write(postalCode);
    document.write(province);
    document.write(preference);
    document.write(bedrooms);
    document.write(priceFilter);
    document.write(email);
//    console.log('First Name: ' + firstName);
//    console.log('Last Name: ' + lastName);
//    console.log('Email: ' + email);


  }

var submit = document.getElementById("submit");
submit.addEventListener("click",displayCustomerInfo, false);	


function clearForm()
{
  const form = document.getElementById('contactForm');
  form.reset();
}