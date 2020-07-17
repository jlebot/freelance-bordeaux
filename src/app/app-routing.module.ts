import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueuilComponent} from './pages/accueuil/accueuil.component';
import {NotimplementedyetComponent} from './layout/notimplementedyet/notimplementedyet.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ParcoursComponent} from './pages/parcours/parcours.component';


const routes: Routes = [
  { path: '', component: AccueuilComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'portfolio', component: NotimplementedyetComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
