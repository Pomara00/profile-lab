import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../user-profile";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.css"]
})
export class ProfileComponentComponent implements OnInit {
  // profile: UserProfile[]=[];

  constructor() {}

  ngOnInit(): void {}
}
