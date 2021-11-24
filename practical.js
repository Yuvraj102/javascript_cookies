const createCookieForm = document.forms.createCookieForm;

const cookieKeyInputField = createCookieForm.cookieKeyInputField;
const cookieValueInputField = createCookieForm.cookieValueInputField;

const deleteCookieForm = document.forms.deleteCookieForm;
const deleteCookieKeyInputField = deleteCookieForm.deleteCookieKey;

const cookiesDiv = document.getElementById("cookiesDiv");

// CREATE COOKIES FORM SUBMITTED
function createFormSubmited() {
  const key = cookieKeyInputField.value;
  const value = cookieValueInputField.value;
  //  create a cookie
  // document.cookie = `${key}=${value}`;
  //  create with expires
  const expireDate = addDaysFromToday(1);

  document.cookie = key + "=" + value + ";expires=" + expireDate;
}

function deleteFormSubmited() {
  // You don't have to specify a cookie value when you delete a cookie.
  const key = deleteCookieKeyInputField.value;

  document.cookie = key + "=;expires=" + subtractDaysFromToday(2);
}

// DATES: add days returns Date obj
function addDaysFromToday(additionalDays) {
  let todayDate = new Date();
  let newDate = new Date();
  newDate.setDate(todayDate.getDate() + additionalDays);
  return newDate;
}
function subtractDaysFromToday(subtractDays) {
  let todayDate = new Date();
  let newDate = new Date();
  newDate.setDate(todayDate.getDate() - subtractDays);
  return newDate;
}

// THIS WILL DISPLAY EXISTING COOKIES ON MAIN PAGE
function displayCookies() {
  if (document.cookie) {
    let cookieArray = document.cookie.split(";");

    cookieArray.forEach(function (el) {
      const cookiePair = el;
      const key = cookiePair.split("=")[0];
      const value = cookiePair.split("=")[1];

      console.log("cookieKey: " + key + " & cookieValue:" + value);
      createCookieElement(key, value);
    });
  }
}
displayCookies();
// CREATES AN HTML ELEMENT
function createCookieElement(key, value) {
  let h3 = document.createElement("h3");

  h3.innerHTML = "key = " + key + " & value = " + value;
  cookiesDiv.appendChild(h3);
}
