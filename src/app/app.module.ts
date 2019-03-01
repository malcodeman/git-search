import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [AppComponent, UserComponent, SearchComponent, HomeComponent, LogoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
