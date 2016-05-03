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

        $("button").on("click",function(){
            var val=$("input").val();
            if(val)
            {
                list.collection.add({
                    name: val
                });
            }
        });
        
    });

});