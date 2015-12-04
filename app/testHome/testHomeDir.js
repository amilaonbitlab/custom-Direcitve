/**
 * Created by amila on 12/4/15.
 */
app.directive('testHome',function (){
        return {
            restrict: 'AE',
            scope: true,
            controller: 'testHomeCtrl',
            templateUrl: 'app/testHome/testHomeView.html',
            link: function (scope, element, attrs) {
                element.on('click', function (event) {
                    scope.$apply(function () {
                        //scope.$emit('goEmitFun', {message: scope.color});
                        //scope.$broadcast('goBroFun', {message: scope.color});
                    });
                });
            }
        }
});


