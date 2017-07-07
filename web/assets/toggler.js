angular.module("toggler", ['restangular'])
    .controller("toggler", function($scope, Restangular) {
        $scope.load = function () {
            $scope.descriptions = Restangular.one('api/descriptions').get().$object;
            $scope.config = Restangular.one(`api/country/${$scope.country}`).get().$object;
        };
        $scope.$watch("config.features", function (newVal, oldVal) {
            if (oldVal && newVal) Restangular.all(`api/country/${$scope.country}`).post($scope.config);
        }, true);
        $scope.getNotice = function (toggle) {
            if (toggle.active && !toggle.scope) return "Fuera de scope y encendido";
            if (!toggle.scope) return "Fuera de scope";
        };
        $scope.country = "cl";
        $scope.load();
    });
