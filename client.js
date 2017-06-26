$(document).ready(function() {
  console.log('JQ sourced');
  $('button').on('click', function() {
    append();
  });// end click
  $('.output').on('click', '.swap', swapColors);
  $('.output').on('click', '.delete', deleteParent);
}); // end onReady

//counter
var counter = 0;

var attach = '<div class="main"><p>' + counter + '</p></div>';
// var secondAttach = '<button class="swap">Swap</button>' +
//                   '<button class="delete">Delete</button>';


//append to DOM
function append() {
  counter ++;
  $('.output').append(attach);
  $('.main').html('<p>' + counter + '</p>');
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
  console.log($(this).parent());
  console.log($(this).children());
  console.log($(this).siblings());
  console.log($(this));
  $(this).parent().remove();
}// end deleteParent
