"use strict";
const profile = {
  template:`
    <p class="name">{{ $ctrl.profileData.name }}</p>
    <p class="contact">{{ $ctrl.profileData.contact }}</p>
    <p class="bio">{{ $ctrl.profileData.bio }}</p>
    <a href="#!/edit-profile">Edit Profile</a>
  `,
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.profileData = ProfileService.getUserProfile();
  }]
};


angular
  .module("App")
  .component("profile", profile)