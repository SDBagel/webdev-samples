
function makeAPICall() {
  // Use fetch to make an API call
  // Also update the response in HTML...
  fetch('https://wisdomduck.sdbagel.com/api/wisdom/dispense')
    .then(res => res.text())
    .then(data => {
      // data parameter passed in is just a string from API
      let resultElement = document.getElementById("resultText");
      resultElement.innerText = data;
      // Also look at loading spinners to make sure stuff is responsive...
      // document.getElementById("loadingSpinner").style.display = "";
    });
}