$(function(){
    $(".add-burger").on("click", function(event){
        event.preventDefault();
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: {
                burger_name: $("#burger_name").val(),
                devoured: false
            }
        }).then(function(){
            console.log("New burger added");
            location.reload();
        });
    });
});