let outputscreen = document.getElementById("output-screen")
function display(num) {
  outputscreen.value += num
}
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value)
  }
  catch (err) {
    alert("Inavalid")
  }
}
function clear() {
  outputscreen.value = "";
}
function del() {
  outputscreen.value = outputscreen.value.slice(2, -1)
}