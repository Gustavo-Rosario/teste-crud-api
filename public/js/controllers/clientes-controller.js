
angular.module('App').controller('ClientesController', function($scope, $http){
    $scope.Clientes = [];
    

    const listarClientes = function(){
        $http.get('/clientes').success(function(data){
            $scope.Clientes = data;
        }).error(function(data, status){
            console.log(data, status);
        });
    };
    
    $scope.excluirCliente = function(Clientes) {
        $scope.Clientes = Clientes.filter(function(cliente){
            if(cliente.selecionado){
                $http.delete('/cliente/'+cliente._id).success(function(){
                    listarClientes();
                }).error(function(error){
                    console.log(error);
                });
            };
        });
    };
    listarClientes();
});