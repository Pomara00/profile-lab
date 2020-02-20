import { Injectable } from "@angular/core";
import { UserProfile } from "./user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileServiceService {
  userProfile: UserProfile = {
    name: "Mitch Cuckovich",
    contact: "mitch@grandcircus.co",
    bio: "Handstands are cool!"
  };

  constructor() {}

  getUserProfile() {
    return this.userProfile;
  }

  setUserProfile(updatedProfile: UserProfile) {
    this.userProfile = updatedProfile;
  }
}
