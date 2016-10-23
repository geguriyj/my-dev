var app = angular.module('myApp', ['ngRoute']);

    app.config(function ($routeProvider) {
//Module의 config API를 사용하면 서비스 제공자provider에 접근할 수 있다. 여기선 $route 서비스 제공자를 인자로 받아온다. 
      $routeProvider
//$routeProvider의 when 메소드를 이용하면 특정 URL에 해당하는 라우트를 설정한다. 이때 라우트 설정객체를 전달하는데 <ng-view>태그에 삽입할 탬플릿에 해당하는 url을 설정객체의 templateUrl 속성으로 정의한다.
          .when('/', {
              templateUrl: 'views/page1.html'
          })
          .when('/link1', {
              templateUrl: 'views/page1.html'
          })
          .when('/link2', {
              templateUrl: 'views/page2.html', controller: 'myDataCtrl'
          })
          .when('/link3:message1', {
              templateUrl: 'views/page3.html', controller: 'myDataCtrl'
          })
          .when('/link3:message1:message2', {
              templateUrl: 'views/page4.html', controller: 'myDataCtrl'
          })
          .when('/link4:message1', {
              redirectTo: function (routeParams, path, search) {
                  console.log("routeParams ",routeParams);
                  console.log("path ",path);
                  console.log("search ",search);
                  return "/link3"+ routeParams.message1;
              }
          })
          .when('/link5', {
              templateUrl: 'views/page5.html', controller: 'myDataCtrl',
              resolve: {
                  app: function ($q, $timeout) {
                      var defer = $q.defer();
                      //defer.resolve();
                      $timeout(function () {
                          debugger;
                          defer.resolve();
                      }, 2000);
                      return defer.promise;
                  }
              }
          })
          .when('/link6', {
              templateUrl: 'views/page6.html', controller: 'myDataCtrl',
              resolve: {
                  loadData: appCtrl.loadData,
                  prepData: appCtrl.prepData
              }
          })
//라우트 설정객체에 controller 속성을 통하여 해당 화면에 연결되는 컨트롤러 이름을 설정할 수 있다.
          .otherwise({
              redirectTo: '/'
          }
      );
//otherwise 메소드를 통하여 브라우저의 URL이 $routeProivder에서 정의되지 않은 URL일 경우에 해당하는 설정을 할 수 있다. 여기선 ‘/home’으로 이동시키고 있다.
    });

var appCtrl = app.controller('myDataCtrl',function($scope, $routeParams, $location) {
//사용자 관리화면의 컨트롤러를 정의한다. 이 컨트롤러는 URL이 ‘/userList’일 경우에만 적용이 된다. 이전의 템플릿 코드에서 별도로 ng-controller 지시자를 사용하지 않고 $routeProvider에서 라우트를 정의할 때 해당 컨트롤러와 연결되는 화면을 정의하였다.

    $scope.myData = {
        msg1 : $routeParams.message1,
        msg2 : $routeParams.message1 + $routeParams.message2
    };

});

appCtrl.loadData = function ($q, $timeout) {
    var defer = $q.defer;
    $timeout(function () {
        defer().resolve();
    }, 2000);
    return defer.promise;
};

appCtrl.prepData = function ($q, $timeout) {
    var defer = $q.defer;
    $timeout(function () {
        defer().resolve();
    }, 2000);
    return defer.promise;
};