import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './pages/home-page/homepage.component';
import { ListpageComponent } from './pages/list-page/listpage.component';
import { SummarypageComponent } from './pages/summary-page/summarypage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    ListpageComponent,
    SummarypageComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
