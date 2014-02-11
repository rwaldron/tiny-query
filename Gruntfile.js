/*global module:false*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: [ '<config:lint.files>', 'www/templates/*.tmpl' ],
      tasks: 'test'
    },
    jshint: {
      file: ['src/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        // In order to look and feel more like jQuery, we're going to allow the
        // tQuery function to operate as a constructor.
        newcap: false,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      tests: {
        files: {
          src: ['test/tests/**/*.js']
        },
        options: {
          globals: {
            $$: true,
            tQuery: true,
            module: true,
            test: true,
            equal: true,
            strictEqual: true,
            ok: true
          }
        }
      }
    },
    uglify: {},
    qunit: {
      index: [ 'test/index.html' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['jshint', 'qunit']);
};

