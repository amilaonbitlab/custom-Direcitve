/**
 * Created by amila on 12/4/15.
 */
app.directive('parent',function (){
        return {
            restrict: 'AE',
            scope: true,
            controller: 'parentCtrl',
            templateUrl: 'app/parent/parentView.html',
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


