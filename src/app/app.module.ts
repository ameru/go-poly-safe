import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataTableModule } from "angular-6-datatable";
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { MapVisualComponent } from './map-visual/map-visual.component';
import { IncidentFilterPipe } from './all-incidents/incident-filter.pipe';
import { ConsoleComponent } from './console/console.component';
import { ViewIncidentComponent } from './view-incident/view-incident.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';

const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'map_visual',
    component: MapVisualComponent
  },
  {
    path: 'all_incidents',
    component: AllIncidentsComponent
  },
  {
      path: 'console',
      component: ConsoleComponent
  },
  {
      path: 'view/:id',
      component: ViewIncidentComponent
  },
  {
    path: 'bar_chart',
    component: BarChartComponent
  }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent, 
    AppComponent,
    HomeComponent,
    AllIncidentsComponent,
    MapVisualComponent,
    IncidentFilterPipe,
    ConsoleComponent,
    ViewIncidentComponent,
    BarChartComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    AgmSnazzyInfoWindowModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkxgq_lARNwLFmykPNIef6TaSEDp6OarY'
    }),
    ChartsModule,
  ],
  entryComponents : [
  ],
  providers: [
    GoogleMapsAPIWrapper,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
