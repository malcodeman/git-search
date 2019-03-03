import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "./user.model";
import { Repo } from "./repo.model";
import { Event } from "./event.model";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  apiUrl = "https://api.github.com";
  constructor(private http: HttpClient) {}

  getUser(username: string) {
    return this.http.get<User>(`${this.apiUrl}/users/${username}`);
  }

  getRepos(username: string) {
    return this.http.get<Repo[]>(
      `${this.apiUrl}/users/${username}/repos?per_page=100`
    );
  }

  getEvents(username: string) {
    return this.http.get<Event[]>(
      `${this.apiUrl}/users/${username}/events?per_page=20`
    );
  }
}
