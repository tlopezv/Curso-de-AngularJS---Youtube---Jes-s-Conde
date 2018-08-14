// El angular.module es un lugar global para crear, registrar y recuperar módulos AngularJS. 
// Todos los módulos (AngularJS core o terceros) que deberían estar disponibles para una 
// aplicación se deben registrar utilizando este mecanismo.
// Pasar un argumento recupera un angular.module existente, mientras que pasar más de un 
// argumento crea un nuevo angular.module
// Un módulo es una colección de servicios, directivas, controladores, filtros e información 
// de configuración. angular.module se usa para configurar $inyector.
// $ injector se usa para recuperar instancias de objeto tal como lo define el proveedor, 
// crear instancias de tipos, invocar métodos y cargar módulos.
// Fuente: https://docs.angularjs.org/api/ng/function/angular.module

var app = angular.module('app',[]);
// Definimos nuestro Controller, llamado "AlumnosController", al que le pasamos el parámetro $scope
//function AlumnosController($scope){
app.controller('AlumnosController', function($scope){
    // Y creamos nuestro Modelo, al que llamamos "alumnos"
    $scope.alumnos=[
        // Este módelo contiene 3 atributos: nombre, telefon y curso
        // Aplicándolo a cada uno de los registros que se encuentran dentro de nuestro módelo
        {nombre:"Juan Blanco", telefono: "1234567890", curso:"Segundo ESO"},
        {nombre:"Rosa Luxemburgo", telefono: "0987654321", curso:"Primero ESO"},
        {nombre:"Alberto Herrera", telefono: "1122334455", curso:"Segundo ESO"},
        {nombre:"Ana Mariño", telefono: "6677889900", curso:"Tercero ESO"}
    ]; 
});