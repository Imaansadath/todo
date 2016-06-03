define([
    "backbone"
], function() {

    return Backbone.View.extend({

        tagName: "li",

        className: "list-group-item",

        events: {
            'click .remove': 'remove',
            'click .pencil': 'edit'
        },

        initialize: function() {
            this.render();
            this.model.collection.on("reset", this.remove, this);
            this.model.on("change", this.rerender, this);
        },

        rerender: function() {
            this.$el.html("");
            this.render();
        },

         render: function() {
             this.$el.append('<span class="remove label label-default label-pill pull-right"><span class="glyphicon glyphicon-remove"></span></span>');
             this.$el.append('<span class="pencil label label-default label-pill pull-right"><span class="glyphicon glyphicon-pencil"></span></span>');
             this.$el.append(this.model.get("name"));
        },

        edit: function() {
            $("#editor").show();
            $("#editor textarea").val(this.model.get("name")).data("model", this.model);
        }

    });

});
