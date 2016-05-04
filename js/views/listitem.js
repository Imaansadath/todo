define([
    
    "backbone"
], function() {
    
    return Backbone.View.extend({

        tagName: "li",

        className: "view",

        events: {
            'click.remove': 'remove'
        },

        initialize: function() {
            this.render();
        },

         render: function() {
            this.$el.html(this.model.get("name"));
            this.$el.append(" <span class='remove' style='cursor: pointer'>[X]</span>");
         }
        
    });

});
        