import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MainBodyComponent } from "./main-body/main-body.component";
import { FooterComponent } from "./footer/footer.component";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";
import { AttributeDirectivesComponent } from "./attribute-directives/attribute-directives.component";
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
