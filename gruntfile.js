module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['public/**/*.js']
    },
    uglify: {
      my_target: {
        options: {
          sourceMap: true
        },
        files: {
          'public/App/TechView/TechView.controller.min.js': 'public/App/TechView/TechView.controller.js',
          'public/App/TechView/TechView.service.min.js': 'public/App/TechView/TechView.service.js',
          'public/App/BlogList/BlogList.controller.min.js': 'public/App/BlogList/BlogList.controller.js',
          'public/App/BlogList/BlogList.service.min.js': 'public/App/BlogList/BlogList.service.js',
          'public/App/AngApp.min.js': 'public/App/AngApp.js',
        }
      }
    },
    concat: {
      options: {
        separator: grunt.util.linefeed + grunt.util.linefeed
      },
      dist: {
        src: ['public/App/TechView/TechView.controller.min.js',
          'public/App/TechView/TechView.service.min.js',
          'public/App/BlogList/BlogList.controller.min.js',
          'public/App/BlogList/BlogList.service.min.js',
          'public/App/AngApp.min.js'
        ],
        dest: 'public/javascripts/Global.min.js',
      },
    },
    clean: {
      js: ['public/**/*.min.js', 'public/**/*.min.js.map']
    },
    watch: {
      jshint: {
        files: ['public/App/**/*.js'],
        tasks: ['jshint']
      },
      uglify: {
        files: ['public/App/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'concat']);
};
