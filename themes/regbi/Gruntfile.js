module.exports = function(grunt) {
    grunt.initConfig({
        svgstore: {
            options: {
                prefix : 'icon-',
                inheritviewbox: true,
                includeTitleElement: false,
                svg: {
                    style: 'display:none'
                }
            },
            default: {
                files: {
                    "assets/img/svg/svg-common-icon-defs.svg":["assets/img/svg/icons/*.svg"]
                }
            }
        },
        watch: {
            svg: {
                files:['assets/img/svg/icons/*.svg'],
                tasks: ['svgstore'],
            },
            config:{
                files:['Gruntfile.js'],
                tasks: ['svgstore'],
            }
        },
    });
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['svgstore']);
};