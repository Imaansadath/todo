define([
    "../models/todo",
    "backbone"
], function(TodoModel) {

    return Backbone.Collection.extend({

        model: TodoModel

    });

});