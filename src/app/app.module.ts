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
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import { SiteService } from "./services/site.service";
import { DisasterService } from "./services/disaster.service";
import { ToastrModule } from "ngx-toastr";
import { AdbHeaderComponent } from "./adb-header/adb-header.component";
import { AdbDisasterCardComponent } from "./adb-disaster-card/adb-disaster-card.component";
import { AdbSiteCardComponent } from "./adb-site-card/adb-site-card.component";
import { AdbAgmInfoWindowComponent } from "./adb-agm-info-window/adb-agm-info-window.component";
import { HttpClientModule } from "@angular/common/http";
import { Routes } from "@angular/router";
import { SocketService } from "./socket.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AdbHeaderComponent,
    AdbDisasterCardComponent,
    AdbSiteCardComponent,
    AdbAgmInfoWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: APP_CONSTANT.GOOGLE_MAP_API_KEY,
      libraries: ["geometry"]
    }),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-center"
    })
  ],
  providers: [SiteService, DisasterService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
