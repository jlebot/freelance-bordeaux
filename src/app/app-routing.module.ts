import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueuilComponent} from './pages/accueuil/accueuil.component';
import {NotimplementedyetComponent} from './notimplementedyet/notimplementedyet.component';
import {ContactComponent} from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: AccueuilComponent },
  { path: 'parcours', component: NotimplementedyetComponent },
  { path: 'portfolio', component: NotimplementedyetComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
