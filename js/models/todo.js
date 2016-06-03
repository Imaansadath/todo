define([
    "../views/listitem",
     "backbone"
 ], function(TodoListItemView) {
     return Backbone.Model.extend({
 
         initialize: function() {
             this.view = new TodoListItemView({
                 model: this
             });
         }
 
    });
 });
