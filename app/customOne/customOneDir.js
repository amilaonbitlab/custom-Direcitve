/**
 * Created by amila on 12/4/15.
 */
app.directive('customOne',function (){
        return {
            restrict: 'AE',
            scope : true,
            templateUrl: 'app/customOne/customOneView.html',
            link: function (scope, element, attrs) {
                //element.on('click', function (event) {
                //    scope.$apply(function () {
                //        scope.$emit('changeColor',{id :scope.item.id});
                //        //scope.$broadcast('goBroFun', {message: scope.color});
                //    });
                //});
                //
                //element.bind('mouseenter', function () {
                //    scope.$apply(function(){
                //        scope.$emit('changeColor',{id :scope.item.id});
                //    });
                //});

                // Publish Data
                scope.setColor = function(value){
                    scope.publish('FIRST_DIR_UPDATED', value);
                    scope.dataPub = value;
                    // communication with second Directive ???
                }

                // Recevied Data
                scope.subscribe('SECOND_DIR_UPDATED', function(data){
                    scope.dataRe = data;
                });
                scope.dataRe = 'NOT Color Selected';
            }
        }
});


