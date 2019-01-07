(function(){
    "use strict";
    angular.module("myapp",[])
    .controller("mycontroller",function($scope){
        $scope.check=function(){
            let item=document.getElementById("add");
            if($scope.name==undefined){
                item.innerHTML="Please enter data first";
            }
            else if($scope.name.split(",").length<=3){
                item.innerHTML="Enjoy!";
            }
            else{
                item.innerHTML="Too Much!";
            }
        }
    });
})();