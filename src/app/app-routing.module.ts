import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importa PresentationComponent

const routes: Routes = [
   // Ruta de presentación
  // Otras rutas de tu aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
