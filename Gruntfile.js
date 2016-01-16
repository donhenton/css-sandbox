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
            drop_html: {
                files: [ './droptest/js/**/*.js',
                    './droptest/css/droptest.css',
                    './droptest/droptest.html'] 
            },
             drop_sass: {
                files: [  
                    './droptest/sass/**/*.scss' ],
                tasks: ['sass:droptest'],
                options: {
                    spawn: false
                }
            } 
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
    grunt.registerTask("droptest", ['sass:droptest','connect:droptest', 'watch']);

}
