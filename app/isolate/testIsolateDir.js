/**
 * Created by amila on 12/4/15.
 */
app.directive('testIsolate',function (){
        return {
            restrict: 'AE',
            scope: {
                message : '@',
                item: '=',
                subscribe : '=',
                publish : '='
            },
            controller: function($rootScope){

            },
            templateUrl: 'app/isolate/testIsolateView.html',
            link: function (scope, element, attrs) {
                element.on('click', function (event) {
                    scope.$apply(function () {
                        scope.color = "blue";
                        //scope.$emit('goEmitFun', {message: scope.color});
                        //scope.$broadcast('goBroFun', {message: scope.color});
                    });
                });
            }
        }
});


