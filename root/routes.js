var folderToHTML  = require('./lib/folderToHtml')

exports.init = function(app) {

    var documentation = function(layout) {
        return function (req, res) {

          folderToHTML.render(__dirname+'/views/home/');

          res.render(layout, {
              title: "Documentation template"
            , active: 'home'
            , menu: folderToHTML.getMenuHTML()
            , html: folderToHTML.getSectionsHTML()
          })
        }
    }

    app.get('/', function (req, res) {

          folderToHTML.render(__dirname+'/views/home/');

          res.render('two_col_nav', {
              title: "Documentation template"
            , active: 'home'
            , menu: folderToHTML.getMenuHTML()
            , html: folderToHTML.getSectionsHTML()
          })
        });


}