import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AgmCoreModule } from "@agm/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { APP_CONSTANT } from "./app.constat";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";
import { SiteService } from "./services/site.service";

/* For IsMarkerExist In This Point */
/* https://stackblitz.com/edit/angular-h8zke9?file=src%2Fapp%2Fapp.component.ts */

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: APP_CONSTANT.GOOGLE_MAP_API_KEY,
      libraries: ["geometry"]
    }),

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
