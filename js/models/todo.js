define([
    "../views/listitem",
     "backbone"
 ], function(TodoListItemView) {
     return Backbone.Model.extend({
 
        defaults: {
            "status": "todo",
            "date" : null,
        },
        
         initialize: function() {
             this.view = new TodoListItemView({
                 model: this
             });
         }
 
    });
 });
