import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.css"]
})
export class HomeSearchComponent implements OnInit {
  username: string = "";

  handleOnChange(e) {
    this.username = e.target.value;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  handleOnClick() {
    if (this.username !== "") {
      this.navigate(this.username);
    }
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
