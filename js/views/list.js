
define([
    "../collections/todo"
], function(TodoCollection) {
    
    return Backbone.View.extend({

      tagName: "ul",

      className: "list-group",

      events: {

      },

      initialize: function() {
        this.collection = new TodoCollection();
        this.collection.on("add", this.addToList, this);
      },

      addToList: function(model) {
         this.$el.append(model.view.$el);
      },
      
      render: function() {}

    });

});