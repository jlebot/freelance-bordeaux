import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfilComponent } from './pages/accueuil/profil/profil.component';
import { PortfolioComponent } from './pages/accueuil/portfolio/portfolio.component';
import { BesoinclientComponent } from './pages/accueuil/besoinclient/besoinclient.component';
import { MesservicesComponent } from './pages/accueuil/messervices/messervices.component';
import { NotimplementedyetComponent } from './notimplementedyet/notimplementedyet.component';
import { AccueuilComponent } from './pages/accueuil/accueuil.component';
import { RecommandationsComponent } from './pages/accueuil/recommandations/recommandations.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FormsModule} from '@angular/forms';

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
    AccueuilComponent,
    RecommandationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
