define([
    "backbone"
], function() {



    return Backbone.View.extend({

        tagName: "li",

        className: "list-group-item",

        events: {
            'click .remove': 'remove',
            'click .pencil': 'edit',
            'click .ok': 'changestatus',
            'click .calendar':'date',
           
        },

        initialize: function() {
            this.render();
            this.model.collection.on("reset", this.remove, this);
            this.model.on("change:name", this.changeNameHTML, this);
            this.model.on("change:status", this.changeStatusHTML, this);

        },

        

        date: function() {
            $("#date-container input").data("model", this.model);
            $("#editor").hide();
            $("#date-container").show();
        },

        changestatus: function(){
            var status=this.model.get("status");
            if (status =='todo') {
                this.model.set({"status": "done"});
            } else {
                this.model.set({"status": "todo"});
            }

        },

        changeNameHTML: function(){
            this.$("span.name").html(this.model.get("name"));
        },

        changeStatusHTML: function(){
            var status=this.model.get("status");
            if (status =="done") {
                this.$("span.ok").css("color","green");
            } else { 
                  this.$("span.ok").css("color","white");
            }
            
                

        },

        render: function() {
             this.$el.append('<span class="remove label label-default label-pill pull-right"><span class="glyphicon glyphicon-remove"></span></span> <span> &nbsp </span>');
             this.$el.append('<span class="pencil label label-default label-pill pull-right"><span class="glyphicon glyphicon-pencil"></span></span>');
             this.$el.append('<span class="ok  label label-default label-pill pull-right"><span class="glyphicon glyphicon-ok"></span></span>');
              this.$el.append('<span class="calendar label label-default label-pill pull-right"><span class="glyphicon glyphicon-calendar"></span></span>');
             this.$el.append("<span class='name'>" + this.model.get("name") + "</span>");
             this.$el.css("background", "black");
        },

        edit: function() {
            $("#date-container").hide();
            $("#editor").show();
            $("#editor textarea").val(this.model.get("name")).data("model", this.model);
        }

    });

});
