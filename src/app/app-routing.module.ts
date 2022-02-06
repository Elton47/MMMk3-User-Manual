import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClipModeComponent } from "src/app/modes/clip-mode/clip-mode.component";
import { ModesComponent } from "src/app/modes/modes.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'modes'
  },
  {
    path: 'modes',
    component: ModesComponent,
    children: [
      { path: 'clip', component: ClipModeComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
