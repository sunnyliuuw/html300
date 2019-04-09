//jQuery Doc Ready
//define array
const array = [];
//click event
$('#mapButton').click(function() {
  //define a variable
  let inputVal = $('#map').val();
  //add new input to the end of array
  array.push(inputVal);
  //double the result maps to each value
  let result = array.map(function(inputVal) {
    return inputVal * 2;
  });
  //display result
  $('#double').text(result);
});

//define arrary
const Arr = [2, 5, 10, 33, 55, 49];
//click event
$('#findButton').click(function() {
  //input value
  let findValue = $('#find').val();
  //find the value
  let findResult = Arr.find(function(element) {
    return element > findValue;
  });
  //display result
  $('#resultOfFind').text(findResult);
});

//define function for checking number
function checkNum(value) {
  return value < $('#every').val();
}
//click event
$('#everyButton').click(function() {
  //display result
  $('#everyInput').text($('#every').val());
  $('#everyNum').text(Arr.every(checkNum));
});

//define array
const createArr = [];
//click event
$('#forEachButton').click(function() {
  //input value
  let input = $('#forEach').val();
  //add new value to the end of array
  createArr.push(input);
  //loop and list all element in the array
  createArr.forEach(function(element) {
    //display result
    $('#createList').text(createArr);
  });
});
