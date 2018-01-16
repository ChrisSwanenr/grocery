$(document).ready(function() {
  $("#groceryForm").submit(function(event) {

    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var toSort = []
      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        toSort.push(userInput);
      });
      var sorted = toSort.sort();
      sorted.forEach(function(sort) {
        $(".results").append("<li>" + sort + "</li>")
      });


    event.preventDefault();


  });
});
