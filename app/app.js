'use strict';

var app = angular.module("TravelApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: "/partial/guide-list.html",
    controller: "BookCtrl"
  });
});
