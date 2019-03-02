import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { GithubService } from "../github.service";
import { User } from "../user.model";
import { Repo } from "../repo.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;
  username: string;
  languages: Repo[];

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  handleOnChange(e) {
    this.username = e.target.value;
  }

  handleOnClick() {
    if (
      this.username !== "" &&
      this.username.toLocaleLowerCase() !== this.user.login.toLocaleLowerCase()
    ) {
      this.getUser(this.username);
      this.getRepos(this.username);
      this.navigate(this.username);
    }
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  formatDate(date: Date) {
    const options = { month: "long", day: "numeric", year: "numeric" };

    return new Date(date).toLocaleDateString("en-US", options);
  }

  getUser(username: string) {
    return this.githubService.getUser(username).subscribe(data => {
      this.user = data;
    });
  }

  getRepos(username: string) {
    return this.githubService.getRepos(username).subscribe(data => {
      const uniqueLangs = new Set();
      data.forEach(entry => {
        if (entry.language) {
          uniqueLangs.add(entry.language);
        }
      });
      this.languages = Array.from(uniqueLangs);
    });
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("username");
    this.getUser(this.username);
    this.getRepos(this.username);
  }
}
