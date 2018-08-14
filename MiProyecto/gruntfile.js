module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        // Especificamos la tarea 'jshint' y especificamos 'scripts.js' 
        // en la lista de archivos que tienen que ser listados y analizados
        jshint:{
            all:['scripts.js']
        }
    });

    // Indicamos la tarea NPM que tiene que ser cargada
    grunt.loadNpmTasks('grunt-contrib-jshint')

    // Default task. 
    // Indicamos que la tarea 'jshint' será la tarea a ejecutar cuando se ejecuta grunt por defecto
    grunt.registerTask('default',['jshint']);
};