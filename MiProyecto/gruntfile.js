module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        // Especificamos la tarea 'jshint' y especificamos 'scripts.js' 
        // en la lista de archivos que tienen que ser listados y analizados
        jshint:{
            all:['scripts.js']
        },
        // Nueva tarea para concatenar
        concat: {
            dist: {
                src: ['scripts.js','script1.js','script2.js'], // archivos a concatenar, sigue este orden al unirlos
                dest: 'unidos.js' // dónde se van a concatenar
            }
        },
        // Nueva tarea para minimizar
        uglify: {
            dist: {
                src: 'unidos.js',
                dest: 'build/unidos.min.js'
            }
        }
    });

    // Indicamos la tarea NPM que tiene que ser cargada
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Cargamos los plugins, para las tareas de concatenación y minimizado
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task. 
    // Indicamos que la tarea 'jshint' será la tarea a ejecutar cuando se ejecuta grunt por defecto.
    // Registramos las dos nuevas tareas de concatenado y minimizado, para que se hagan por defecto.
    grunt.registerTask('default',['jshint','concat','uglify']);
};