"use strict";
const editProfile = {
  template: `
    <form ng-submit="$ctrl.editProfile($ctrl.profile);">
      <label class="blue-text">Name</label>
      <input class="input-text" type="text" ng-model="$ctrl.profile.name" placeholder="Name">
      <label class="blue-text">Contact Info</label>
      <input class="input-text" type="text" ng-model="$ctrl.profile.contact" placeholder="Contact Info">
      <label class="blue-text">Bio</label>      
      <input class="input-text" type="text" ng-model="$ctrl.profile.bio" placeholder="Bio">
      <button class="edit-button" ng-click="/profile">Edit Profile</button>
    </form>
  `,

  controller: ["ProfileService", function($location, ProfileService) {
    const vm = this;
    vm.profile = angular.copy(ProfileService.getUserProfile());
    vm.editProfile = (profile) => {
      console.log(profile);
      ProfileService.setUserProfile(profile);
    };
    vm.click = () => {
      $location.path('/profile');
    }

  }]

};

angular
  .module("App")
  .component("editProfile", editProfile);