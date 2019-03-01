import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { GithubService } from "../github.service";
import { User } from "../user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;
  username: string;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  handleOnChange(e) {
    this.username = e.target.value;
  }

  handleClick() {
    if (this.username !== "") {
      this.getUser(this.username);
      this.navigate(`/${this.username}`);
    }
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  getUser(username: string) {
    return this.githubService.getUser(username).subscribe(data => {
      this.user = data;
    });
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("username");
    this.getUser(this.username);
  }
}
