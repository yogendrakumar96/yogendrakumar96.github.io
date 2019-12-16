$(document).ready(function($) {
  $("form").submit(function() {
    if ($(".input").val() !== " ") {
      var newTask = $(".input").val();

      var newLi = $("<li>" + newTask + "</li>");

      newLi.on("click", function() {
        $(this).remove(); //Remove a task when it is clicked.....
      });

      $("ul").prepend(newLi); // It will add a new task at the beginning of the list.....

      $(".input").val(" ");
      return false;
    }
  });

  $("ul").sortable();
});
