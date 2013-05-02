var _ = require('./components/kmdoc/node_modules/underscore')
    KMDoc = require('./components/kmdoc'),
    create = KMDoc.create;

KMDoc.create = function(options) {
    return create(_.extend({
        fileTmpl: _.template('<!DOCTYPE html>\n<html lang="<%= options.lang %>">\n<head>\n <meta charset="<%= options.encoding %>"/>\n <title><%= options.title %></title><%= head %>\n</head>\n<body>\n\n<div class="navbar navbar-inverse navbar-fixed-top"><div class="navbar-inner"><a class="brand" href="#"><%= options.title %></a><ul class="nav"><li class="divider-vertical"></li><li><a href="<%= options.componentsPath.replace(/components\\/$/, "") %>">KMDoc Knowledge Base</a></li></ul><div class="control-toolbar"></div></div></div>\n\n<%= content %>\n\n</body>\n</html>\n'),
        componentsPath:'../components/'
    }, options));
}

module.exports = KMDoc;
