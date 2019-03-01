import { Component, OnInit } from "@angular/core";

import { GithubService } from "../github.service";
import { User } from "../user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    return this.githubService.getUser("malcodeman").subscribe(data => {
      this.user = data;
    });
  }
}
