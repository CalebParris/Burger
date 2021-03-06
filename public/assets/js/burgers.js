$(function(){
    $(".burger-btn").on("click", function(event){
        event.preventDefault();
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: {
                burger_name: $("#burger_name").val().trim(),
                devoured: false
            }
        }).then(function(){
            console.log("New burger added");
            location.reload();
        }).catch(function(err){
            if (err){
                console.log(err);
                $("#error").removeClass("hidden");
            }
        });
    });

    $(".devour-btn").on("click", function(){

        $.ajax("/api/burgers/" + $(this).data("id"), {
            type: "PUT",
            data: { devoured: true }
        }).then(function(){
            console.log("Burger has been devoured");
            location.reload();
        });
    });
});