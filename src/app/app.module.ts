import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InformeVentasComponent } from '../app/components/informe-ventas/informe-ventas.component';
import { InformeService } from '../app/services/reports/informe.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent
  ],
})
export class AppModule { }
