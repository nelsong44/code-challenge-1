$(document).ready(function() {
  console.log('JQ sourced');
  $('button').on('click', function() {
    counter ++;
    append();
  });// end click
  $('.output').on('click', '.swap', swapColors);
  $('.output').on('click', '.delete', deleteParent);
}); // end onReady

// var attach =

//counter
var counter = 0;

//append to DOM
function append() {
  $('.output').append('<div class="main"></div>');
  $('.main').append('<p>' + counter + '</p>');
  $('.main').append('<button class="swap">Swap</button>' +
                    '<button class="delete">Delete</button>');
  console.log(counter);
} // end append

//swap background color of parent div on click of 'swap' button
function swapColors() {
  console.log($(this).parent());
  $(this).parent().toggleClass('applyYellow');
} // end swapColors

//delete parent div of the 'delete' button that is clicked
function deleteParent() {
  $(this).parent().remove();
}// end deleteParent
