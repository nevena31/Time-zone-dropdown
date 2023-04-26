function showTimeZoneInfo(event) {
  if (event.target.value.length > 0) {
    let currentDateTimeInfo = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY hh:mm A");
    alert(`It is ${currentDateTimeInfo} in ${event.target.value}`);
  }
}
let citySelection = document.querySelector("#cities");
citySelection.addEventListener("change", showTimeZoneInfo);
