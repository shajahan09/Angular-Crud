var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.test='Todo Test';
	$scope.todos=[];
	$scope.add=function(){
	$scope.todos.push({
		name: $scope.name,
		isSelect: false
		
	})
		
	}
	$scope.check=function(){
		var count=0;
		for(var i=0;i<$scope.todos.length;i++){
			if($scope.todos[i].isSelect == false){
				count++;
			}
		}
		return count;
	}
	
})