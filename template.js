/*
 * grunt-init-bibliosoph
 * https://gruntjs.com/
 *
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a bibliosoph documentation base site.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Here is some detail about the upcoming questions:\n\n' +
  'name             : the name of your project\n' +
  'repository_host  : github, bitbucket or other\n' +
  'repository       : the url to your repository (optional)\n' +
  'download         : the download link of your project (optional)\n' +
  'analytics_id     : the UA code for Google Analytics (optional)\n' +
  'domain           : the domain the site will be hosted under (optional)\n' +
  '                   just the domain, like google.com, no subdomain\n' +
  'menu             : true or false, wether you want a menu or not\n' +
  'licenses         : license for your project: MIT, MPL-2.0, GPL-2.0, or Apache-2.0\n' +
  'version          : version of your project\n' +
  'author_*         : info about you for the package.json\n'
  ;

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. You can then start the server with _node app.js_. For more' +
  'information, please read the Bibliosoph documentation:' +
  '\n\n' +
  'http://bibliosoph.pilla.rs/';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('repository_host', 'github'),
    init.prompt('repository_url'),
    init.prompt('download'),
    init.prompt('analytics_id'),
    init.prompt('domain'),
    init.prompt('menu', 'true'),
    init.prompt('licenses'),
    init.prompt('version'),
    init.prompt('author_email'),
    init.prompt('author_name'),
    init.prompt('author_url')
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};