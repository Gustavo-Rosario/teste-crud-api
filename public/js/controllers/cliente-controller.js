angular.module('App').controller('ClienteController', function($scope, $http, $routeParams){
    $scope.cliente = {};
    
    $scope.cadastrarCliente = function(){
        if($scope.cliente._id){
            $http.put('/cliente/'+ $scope.cliente._id, $scope.cliente)
            .success(function(){

            })
            .error(function(error){
                console.log(error)
            })
        } else {
            
            $http.post('/cliente', $scope.cliente)
            .success(function(){
            })
            .error(function(error){
                console.log(error);
            })
        }
    }





    if($routeParams.clienteId) {
        $http.get('/cliente/'+ $routeParams.clienteId)
        .success(function(cliente){
            console.log($routeParams.clienteId)
            $scope.cliente = cliente
        })
    }
})