import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArtikelComponent } from './create-artikel/create-artikel.component';
import { HomeComponent } from './home/home.component';
import { ViewArtikelComponent } from './view-artikel/view-artikel.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'create', component: CreateArtikelComponent },
  { path: 'view/:artikelindex', component: ViewArtikelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
