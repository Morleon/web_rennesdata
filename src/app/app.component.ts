import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
* Composant principal qui permet d'afficher le footer, le header et le composant showdata
*/
export class AppComponent {
  //titre de l'application affiché dans le header
  title = 'rennesdata';
}
