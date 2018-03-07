module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['ClientServer/**/*.js']
    },
    cssmin: {
      options: {
        sourceMap: true,
        report: 'min'
      },
      target: {
        files: {
          'public/stylesheets/style.min.css': 'public/stylesheets/style.css',
          'public/stylesheets/common.min.css': 'public/stylesheets/common.css',
          'public/stylesheets/cards.min.css': 'public/stylesheets/cards.css'
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          sourceMap: true
        },
        files: {
          'ClientServer/Angular1/Controllers/TechView.controller.min.js': 'ClientServer/Angular1/Controllers/TechView.controller.js',
          'ClientServer/Angular1/Controllers/BlogList.controller.min.js': 'ClientServer/Angular1/Controllers/BlogList.controller.js',
          'ClientServer/Angular1/Controllers/Login.controller.min.js': 'ClientServer/Angular1/Controllers/Login.controller.js',
          'ClientServer/Angular1/Service/TechView.service.min.js': 'ClientServer/Angular1/Service/TechView.service.js',
          'ClientServer/Angular1/Service/BlogList.service.min.js': 'ClientServer/Angular1/Service/BlogList.service.js',
          'ClientServer/Angular1/Service/Auth.service.min.js': 'ClientServer/Angular1/Service/Auth.service.js',
          'ClientServer/Angular1/Service/login.service.min.js': 'ClientServer/Angular1/Service/login.service.js',
          'ClientServer/Angular1/Service/shared.service.min.js': 'ClientServer/Angular1/Service/shared.service.js',
          'ClientServer/Angular1/Service/BlogManager.service.min.js': 'ClientServer/Angular1/Service/BlogManager.service.js',
          'ClientServer/Angular1/Service/TutorialManager.service.min.js':'ClientServer/Angular1/Service/TutorialManager.service.js',
          'ClientServer/Angular1/Directives/SignUp/SignUp.directive.min.js': 'ClientServer/Angular1/Directives/SignUp/SignUp.directive.js',
          'ClientServer/Angular1/Directives/Login/Login.directive.min.js': 'ClientServer/Angular1/Directives/Login/Login.directive.js',
          'ClientServer/Angular1/Directives/shared/common.directive.min.js': 'ClientServer/Angular1/Directives/shared/common.directive.js',
          'ClientServer/Angular1/Directives/shared/tagger/tagger.directive.min.js': 'ClientServer/Angular1/Directives/shared/tagger/tagger.directive.js',
          'ClientServer/Angular1/Directives/shared/Disqus/disqus.directive.min.js': 'ClientServer/Angular1/Directives/shared/Disqus/disqus.directive.js',
          'ClientServer/Angular1/Directives/shared/Grid/grid.directive.min.js': 'ClientServer/Angular1/Directives/shared/Grid/grid.directive.js',
          'ClientServer/Angular1/Directives/BlogManager/BlogPostManager.directive.min.js': 'ClientServer/Angular1/Directives/BlogManager/BlogPostManager.directive.js',
          'ClientServer/Angular1/Directives/BlogManager/BlogPostFull.directive.min.js': 'ClientServer/Angular1/Directives/BlogManager/BlogPostFull.directive.js',
          'ClientServer/Angular1/Directives/TutorialManager/TutorialManager.directive.min.js': 'ClientServer/Angular1/Directives/TutorialManager/TutorialManager.directive.js',
          'ClientServer/Angular1/AngApp.min.js': 'ClientServer/Angular1/AngApp.js',
        }
      }
    },
    concat: {
      options: {
        separator: grunt.util.linefeed + grunt.util.linefeed
      },
      js: {
        src: [
          'ClientServer/Angular1/AngApp.min.js',
          'ClientServer/Angular1/Controllers/TechView.controller.min.js',
          'ClientServer/Angular1/Controllers/Login.controller.min.js',
          'ClientServer/Angular1/Controllers/BlogList.controller.min.js',
          'ClientServer/Angular1/Service/TechView.service.min.js',
          'ClientServer/Angular1/Service/Auth.service.min.js',
          'ClientServer/Angular1/Service/BlogList.service.min.js',
          'ClientServer/Angular1/Service/login.service.min.js',
          'ClientServer/Angular1/Service/shared.service.min.js',
          'ClientServer/Angular1/Service/BlogManager.service.min.js',
          'ClientServer/Angular1/Service/TutorialManager.service.min.js',
          'ClientServer/Angular1/Directives/SignUp/SignUp.directive.min.js',
          'ClientServer/Angular1/Directives/Login/Login.directive.min.js',
          'ClientServer/Angular1/Directives/shared/common.directive.min.js',
          'ClientServer/Angular1/Directives/shared/Grid/grid.directive.min.js',
          'ClientServer/Angular1/Directives/shared/tagger/tagger.directive.min.js',
          'ClientServer/Angular1/Directives/shared/Disqus/disqus.directive.min.js',
          'ClientServer/Angular1/Directives/BlogManager/BlogPostManager.directive.min.js',
          'ClientServer/Angular1/Directives/BlogManager/BlogPostFull.directive.min.js',
          'ClientServer/Angular1/Directives/TutorialManager/TutorialManager.directive.min.js'
        ],
        dest: 'public/javascripts/Global.min.js',
      },
      css: {
        src: ['public/stylesheets/style.min.css',
          'public/stylesheets/cards.min.css',
          'public/stylesheets/common.css'
        ],
        dest: 'public/stylesheets/Global.min.css',
      },
    },
    clean: {
      js: ['ClientServer/**/*.min.js', 'ClientServer/**/*.min.js.map', 'public/**/*.min.js', 'public/**/*.min.js.map'],
      css: ['public/**/*.min.css', 'public/**/*.min.css.map']
    },
    watch: {
      jshint: {
        files: ['ClientServer/**/*.js'],
        tasks: ['jshint']
      },
      uglify: {
        files: ['ClientServer/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'cssmin', 'concat']);
  // Default task(s).
  grunt.registerTask('dev', ['clean', 'jshint', 'uglify', 'cssmin', 'concat']);
};
