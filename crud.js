var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){

	$scope.test='Crud Test';
	$scope.products=[];
	$scope.add=function(){
		$scope.products.push({
			name: $scope.name,
			qty: $scope.qty
		})
		
	}
	$scope.delete=function(index){
		$scope.products.splice(index,1);
	}
	$scope.edit=function(index){
		$scope.name=$scope.products[index].name;
		$scope.qty=$scope.products[index].qty;
		$scope.indexItem =index;
		$scope.filed=true;
		
	}
	$scope.update=function(index){
		$scope.products[$scope.indexItem]={
			name: $scope.name,
			qty: $scope.qty
			
		}
		$scope.filed=false;
	}
})