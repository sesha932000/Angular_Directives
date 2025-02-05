import { Component } from '@angular/core';
import { DirectivesExeciresComponent } from "./directives-execires/directives-execires.component";

@Component({
  selector: 'app-root',
  imports: [DirectivesExeciresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
