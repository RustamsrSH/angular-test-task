import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/home-page/homepage.component';
import { ListpageComponent } from './pages/list-page/listpage.component';
import { SummarypageComponent } from './pages/summary-page/summarypage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'list', component: ListpageComponent },
  { path: 'summary', component: SummarypageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
