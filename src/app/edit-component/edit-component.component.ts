import { Component, OnInit } from "@angular/core";
import { ProfileServiceService } from "../profile-service.service";
import { Router } from "@angular/router";
import { UserProfile } from "../user-profile";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponentComponent implements OnInit {
  profile: UserProfile;

  constructor(private service: ProfileServiceService, private router: Router) {}

  ngOnInit() {
    this.profile = this.service.getUserProfile();
  }
  update(form: NgForm) {
    this.service.setUserProfile(form.value);
  }
}
