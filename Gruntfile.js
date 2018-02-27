module.exports = function (grunt) {
    // require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
    //https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md
    grunt.initConfig({
        sass: {
            cssPopUp: {
                options: {
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    './demos/cssPopUp/css/cssPopUp.css': './demos/cssPopUp/sass/cssPopUp.scss'
                }
            }
        },
        watch: {
            options: {livereload: true}
            ,
            pop_html: {
                files: [ './demos/cssPopUp/js/**/*.js',
                    './demos/cssPopUp/css/cssPopUp.css',
                    './demos/cssPopUp/index.html'] 
            },
             pop_sass: {
                files: [  
                    './demos/cssPopUp/sass/**/cssPopUp.scss' ],
                tasks: ['sass:cssPopUp'],
                options: {
                    spawn: false
                }
            } 
        },
        connect: {
            cssPopUp: {
                options: {
                    port: 8888,
                    hostname: '*',
                    open: 'http://localhost:8888/index.html',
                    livereload: true,
                    base: './demos/cssPopUp'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask("cssPopUp", ['sass:cssPopUp','connect:cssPopUp', 'watch']);

}
