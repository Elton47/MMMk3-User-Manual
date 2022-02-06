import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';
import { ModesComponent } from './modes/modes.component';
import { ClipModeComponent } from './modes/clip-mode/clip-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    ModesComponent,
    ClipModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
