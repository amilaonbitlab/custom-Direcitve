/**
 * Created by amila on 12/4/15.
 */
app.directive('home',function (){
        return {
            restrict: 'AE',
            scope: true,
            controller: 'homeCtrl',
            templateUrl: 'app/homeView.html',
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


