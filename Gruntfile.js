module.exports = function (grunt) {
    // require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
    //https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md
    grunt.initConfig({
        sass: {
            droptest: {
                options: {
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    './droptest/css/droptest.css': './droptest/sass/droptest.scss'
                }
            }
        },
        watch: {
            options: {livereload: true}
            ,
            drop_test: {
                files: [ './droptest/*.js',
                    './droptest/css/droptest.css',
                    './droptest/sass/**/*.scss',
                    './droptest/droptest.html'],
                tasks: ['sass:droptest'],
                options: {
                    spawn: true
                }
            },
        },
        connect: {
            droptest: {
                options: {
                    port: 8888,
                    hostname: '*',
                    open: 'http://localhost:8888/droptest.html',
                    livereload: true,
                    base: 'droptest'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask("droptest", ['sass:droptest','connect:droptest', 'watch:drop_test']);

}
