
  $(document).ready(function() {
    $("#getMessage").on("click", function(){

      $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
         $(".message").html(data.message);
          console.log("Status of api request: " + status);
      });

    });
  });

