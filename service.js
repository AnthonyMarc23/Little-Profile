"use strict";
function ProfileService() {

  let profileData = {
    name: "poopy",
    contact: "poopy@shoopy.loo",
    bio: "droopy"
  };

  const getUserProfile = () => {
    return profileData;
  };

  const setUserProfile  = (info) => {
    profileData = info;
    console.log(info);
  };

  return {
    getUserProfile,
    setUserProfile 
  };
}


angular
  .module("App")
  .factory("ProfileService", ProfileService)