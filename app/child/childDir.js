/**
 * Created by amila on 12/4/15.
 */
app.directive('child',function (){
        return {
            restrict: 'AE',
            scope: true,
            templateUrl: 'app/child/childView.html',
            link: function (scope, element, attrs) {
                element.on('click', function (event) {
                    scope.$apply(function () {
                        scope.$emit('changeColor',{id :scope.item.id});
                        //scope.$broadcast('goBroFun', {message: scope.color});
                    });
                });

                element.bind('mouseenter', function () {
                    scope.$apply(function(){
                        scope.$emit('changeColor',{id :scope.item.id});
                    });
                });
            }
        }
});


