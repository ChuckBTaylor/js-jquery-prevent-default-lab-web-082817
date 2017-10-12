$(document).ready(function() {
  $("form").on("submit", function(event) {
    adds(event);
  });
});

function adds(event) {
  let item = $("#grab_item").val();
  $("#list ol").append(`<li>${item}</li>`);
  event.preventDefault();
}
