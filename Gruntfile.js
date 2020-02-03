module.exports = function(grunt) { 
    grunt.initConfig({
        watch: {
            sass: {
              files: '**/*.sass',
              tasks: ['sass'],
              options: {
                livereload: 35729
              }
            },
            all: { files: ['**/*.html'], options: { livereload: true } } 
        },
        sass: { dev: { files: { 'css/main.css':'sass/main.sass' } } }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
