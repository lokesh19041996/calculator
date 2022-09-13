// Variables for datePicker

var datePicker = document.getElementById('datePicker')
var choseDate = document.getElementById('choseDate')

//Variables For Printing Values

var ageYear = document.getElementById("ageYear")
var ageMonth = document.getElementById("ageMonth")
var ageDays = document.getElementById("ageDays")
var ageHours = document.getElementById("ageHours")
var ageSeconds = document.getElementById("ageSeconds")
var agemilliseconds = document.getElementById("agemilliseconds")

datePicker.addEventListener('change', function () {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var selectedDate = new Date(this.value)
  var DOB = selectedDate.toLocaleDateString('en-US', options)

  // console.log("DOB : " + DOB)
  choseDate.innerHTML = "DOB : " + "" + DOB;

  var milliseconds_Btw_DOB = Date.parse(DOB)
  var milliseconds_Btw_Now=Date.now()

  var age_in_Milliseconds=milliseconds_Btw_Now-milliseconds_Btw_DOB;

  console.log(age_in_Milliseconds);

  var milliseconds=age_in_Milliseconds;
  var second=1000
  var minute=second*60
  var hour=minute*60
  var day=hour*24
  var month=day*30
  var year=day*365


  //Now Start the Calculation

  var years=Math.round(milliseconds/year)
  var months=years*12
  var days=years*365
  var hours=Math.round(milliseconds/hour)
  var seconds=Math.round(milliseconds/second)

  //Now it is time to print values in boxes

  ageYear.innerHTML=years
  ageMonth.innerHTML=months
  ageDays.innerHTML=days
  ageHours.innerHTML=hours
  ageSeconds.innerHTML=seconds
  agemilliseconds.innerHTML=milliseconds

  document.querySelector('.age_calc').classList.add('expand');
})