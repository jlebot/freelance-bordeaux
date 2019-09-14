import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BesoinclientComponent } from './besoinclient/besoinclient.component';
import { MesservicesComponent } from './messervices/messervices.component';
import { NotimplementedyetComponent } from './notimplementedyet/notimplementedyet.component';
import { AccueuilComponent } from './accueuil/accueuil.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AccueuilComponent },
  { path: 'parcours', component: NotimplementedyetComponent },
  { path: 'portfolio', component: NotimplementedyetComponent },
  { path: 'contact', component: NotimplementedyetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
    PortfolioComponent,
    BesoinclientComponent,
    MesservicesComponent,
    NotimplementedyetComponent,
    AccueuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
