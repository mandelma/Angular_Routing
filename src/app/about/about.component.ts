import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutMe: string = "Valmistun Metropolia ammattikorkeakoulussa ohjelmistotuotannon alalla ja olisin " +
"kiinnostunut harjoittelupaikasta mm. frontend, backend tai full stack websovellusten" +
"kehityksessä sekä ohjelmoinnissa yleensä. Tavoitteeni on työllistyä ja päästä kehittämään itseäni alalla"
imgPath: string = 'assets/cv_foto.jpg'
}
