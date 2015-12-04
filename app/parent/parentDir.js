/**
 * Created by amila on 12/4/15.
 */
app.directive('parent',function (){
        return {
            restrict: 'AE',
            scope: true,
            templateUrl: 'app/parent/parentView.html',
            link: function (scope, element, attrs) {

                scope.message = "This message inside parent Directive";

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


