const input = document.getElementById('input').value;
// const button = document.getElementById('button').addEventListener('click', validateInput());


function validateInput() {
  if (input === " " || input === null) {
    alert ("Fill in the input field before submitting");
    return false;
    console.log("Fill in the input field before submitting");
  } else if (input.length <= 5) {
    alert ("Please put in a valid link");
    return false;
    console.log("Please put in a valid link");
  }
}