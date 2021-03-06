import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { FaceSnapsModule } from "./face-snaps/face-snaps.module";
import { LandingPagesModule } from "./landing-pages/landing-pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}