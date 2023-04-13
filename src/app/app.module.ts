import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { CartaoVisitaComponent } from './components/cartao-visita/cartao-visita.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, Formulario2Component, Formulario1Component, CartaoVisitaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
