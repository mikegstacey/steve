angular.module('app').controller('myCustomer', function ($scope, $http) {
    $scope.customer = {name: 'Mike', address: 'Box 234'};
    var result = [];
    $scope.result = result;
    $scope.getCategories = function() {
        var types = [];
        var hash = {};
        var type;
        var products = $scope.contents.products;
        for(var a = 0; a < products.length; a += 1) {
            type = products[a].type;
            if(!hash[type]){
                types.push(type);
                hash[type] = true;
            }
        }
        return types;
    };
    $scope.getTypes = function (){
        var hash = {};
        // for loop $scope.contents.products
        var products = $scope.contents.products;
        var type;
        for(var i = 0; i < products.length; i += 1) {
            type = products[i].type;
            type = type.charAt(0).toUpperCase() + type.substr(1, type.length -1);
            hash[type] = true;
        }
        return Object.keys(hash);
    };

    $scope.selectType = function(type){
        console.log("Selected Type: %s", type);
    };


        $http.get('data/products.json')
        .success(function (data) {
            $scope.contents = data;
            $scope.types = $scope.getTypes();
            console.log($scope.types);
            console.log(data);
        })
        .error(function (data, status, error, config) {
            $scope.contents = [
                {heading: "Error", description: "Could not load json   data"}
            ];
        });
});