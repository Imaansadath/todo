define(function() {

    return require.config({
        version: "1.0.0",
        paths: {
            "jquery": "lib/jquery-2.2.3.min",
            "backbone": "lib/backbone-min",
            "underscore": "lib/underscore-min",
            "todo": "views/list"
        },
        shim: {
            "backbone": {
                exports: "Backbone",
                deps: ["underscore", "jquery"]
            }
        }
    });

});
