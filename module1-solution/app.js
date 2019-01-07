(function(){
    "use strict";
    angular.module("myapp",[])
    .controller("mycontroller",function($scope){
        $scope.check=function(){
            let item=document.getElementById("add");
            let   ins = document.getElementById("textbox").value;
            let text=$scope.name;
            if(text==undefined||ins==null||ins==undefined||ins==""){
                item.innerHTML="Please enter data first";
            }
            else if(text.split(",").filter(ch=>ch!=" ").length<=3){
                item.innerHTML="Enjoy!";
            }
            else{
                item.innerHTML="Too Much!";
            }
        }
    });
})();