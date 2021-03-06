define([
    "./config"
], function(config) {

    require(["views/list"], function(ListView) {

        list = new ListView();
        $("#content").append(list.$el);

        list.collection.add([{
            name: "Clean the house"
        }]);

        list.collection.add([{
            name: "Oil hair"
        }]);

        list.collection.add([{
            name: "Print certificate"
        }]);

        $("#editor .submit").on("click",function(){
            var val = $("#editor textarea").val();
            var model = $("#editor textarea").data("model");
            model.set("name", val);
            $("#editor").hide();
        });

        $("#editor .cancel").on("click", function() {
            $("#editor").hide();
        });

        $("#date-container .cancel").on("click", function() {
            $("#date-container").hide();
        });

        $("#clear").on("click",function(){
            list.collection.reset(); 
        });
        $("#date-container .submit").on("click",function(){
            var date = $("#date-container input").val();
            var model = $("#date-container input").data("model");
            model.set("date", date);
            $("#date-container").hide();
        });

        $("form" ).on("submit", function(e){
            e.preventDefault();
            var val=$("input").val();
            if(val) {
                list.collection.add({
                    name: val
                });
                $("input").val(" ");
            }
        });
        
  });

});
