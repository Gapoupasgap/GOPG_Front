import { Component } from '@angular/core';

import { faPlaneDeparture, faCircle, faGlobeAfrica, faBook } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GOPG';
  circle = faCircle;
  departure = faPlaneDeparture;
  globe = faGlobeAfrica;
  book = faBook;
  fb = faFacebookF;
  twitter = faTwitter;
  insta = faInstagram;

}

