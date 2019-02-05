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
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import { SiteService } from "./services/site.service";
import { DisasterService } from "./services/disaster.service";
import { ToastrModule } from "ngx-toastr";

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
    MatToolbarModule,
    MatTabsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-center"
    })
  ],
  providers: [SiteService, DisasterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
