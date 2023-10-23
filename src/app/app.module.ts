import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscritosComponent } from './components/escritos/escritos.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, EscritosComponent,],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, FormsModule], // Añade ReactiveFormsModule aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
