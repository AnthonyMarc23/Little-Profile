"use strict";

angular
  .module("App", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/edit-profile", {
        template: "<edit-profile></edit-profile>"
      })
      .when("/profile", {
        template: "<profile></profile>"
      })
  });
