/**
 * Created by amila on 12/4/15.
 */
app.directive('child',function (){
        return {
            restrict: 'AE',
            scope: true,
            controller: 'childCtrl',
            templateUrl: 'app/child/childView.html',
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


