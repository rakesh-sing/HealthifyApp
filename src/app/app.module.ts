import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HealthListComponent } from './health-list/health-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HealthListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
