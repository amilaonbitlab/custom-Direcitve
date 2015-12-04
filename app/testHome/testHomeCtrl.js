app.controller("testHomeCtrl",function($scope) {

    $scope.message = "This is Test Home Controller @ test Home ";

    $scope.items = [
        {id : 0,color: 'red'},
        {id : 1,color: 'blue'},
        {id : 2,color: 'green'},
        {id : 3,color: 'green'}
    ];

    $scope.changeColor = function(){
        for(var i =0 ; i < 4; i++){
            $scope.items[i]['color'] = '#FFFFFF';
        }
    };
    $scope.reSet = function(){
        $scope.items = [
            {id : 0,color: 'red'},
            {id : 1,color: 'blue'},
            {id : 2,color: 'green'},
            {id : 3,color: 'green'}
        ];
    };

    $scope.$on('changeColor',function(evnet,args){

        var i = args.id;
        //for(var i =0 ; i < 4; i++){
            $scope.items[i]['color'] = '#FF88DD';
        //}
    });

    $scope.closeRow = true;

});