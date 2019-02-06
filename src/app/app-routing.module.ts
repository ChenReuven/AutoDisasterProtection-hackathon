import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SitesResolverService } from "./sites-resolver.service";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    resolve: {
      sites: SitesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SitesResolverService]
})
export class AppRoutingModule {}
