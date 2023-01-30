import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';









import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NavigationClientItem } from './theme/layout/admin/navigation/navigationclient';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { NavigationAtelierItem } from './theme/layout/admin/navigation/navigationAtelier';
// import { BonsortieComponent } from './demo/atelier/bonsortie/bonsortie.component';
// import { ListePaiementComponent } from './demo/financier/liste-paiement/liste-paiement.component';
// import { StatistiqueComponent } from './demo/financier/statistique/statistique.component';
// import { HomeComponent } from './demo/financier/home/home.component';
// import { ListePieceComponent } from './demo/financier/liste-piece/liste-piece.component';
// import { AddPieceComponent } from './demo/financier/add-piece/add-piece.component';







@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    ConfigurationComponent,
    GuestComponent,
    // BonsortieComponent,
    // ListePaiementComponent,
    // StatistiqueComponent,
    // HomeComponent,
    // ListePieceComponent,
    // AddPieceComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule,HttpClientModule,NgxLoadingModule.forRoot({}),NgCircleProgressModule.forRoot({
    // set defaults here
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: '#78C000',
    innerStrokeColor: '#C7E596',
    animationDuration: 300,
  })],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [NavigationItem,NavigationClientItem,NavigationAtelierItem,DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule {}
