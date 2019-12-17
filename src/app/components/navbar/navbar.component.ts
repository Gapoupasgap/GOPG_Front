import { Component, OnInit, Inject, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


//import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';


//import { RootStoreState, AuthStoreActions, AuthStoreSelector  } from "../../root-store";
//import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('state', [
      state('top-transparent', style({
        'background-color': 'transparent',
      })),
      state('top-visible', style({
        'background-color': '*',
      })),
      state('scrolled', style({
        'background-color': '*',
      })),
      transition('* => scrolled', animate('1000ms ease-in')),
      transition('scrolled => *', animate('1000ms ease-in'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  @Input() unscrolledColor: string;
  @Input() scrolledColor: string;
  @Input() invisibleUnscrolled: boolean;

  public isNavbarCollapsed = true;

  public isScrolled = false;

  public home: any;
  private allMenu: [any];
  public menulist: { title: string; path: string; id: string; }[];

  public bars = faBars;


  public navbarColor: string;
  public state: string;


  // public isAuthenticated$: Observable<boolean>;
  // public user$ : Observable<User>;
  // public exclamIcon = faExclamationTriangle;

  //constructor(private router: Router, private store: Store<RootStoreState.State>) {
  constructor(private router: Router) {

    
    this.home = {title: 'Home', path: 'home'};

    this.menulist = [
      {title: 'Login', path: 'login',  id: 'loggin-button'},
      {title: 'Sign Up', path: 'signup',  id: 'signup-button'},
      {title: 'Settings', path: 'settings',  id: 'settings-button'},
    ];
    //this.isAuthenticated$ = this.store.select(AuthStoreSelector.selectIsAuthenticated);
    //this.user$ = this.store.select(AuthStoreSelector.selectAuthUser);
  }

  logOut(): void {
    //this.store.dispatch(new AuthStoreActions.LogOut);
  }

  ngOnInit() {
    this.navbarColor = this.unscrolledColor;
    this.state = this.invisibleUnscrolled ? 'top-transparent' : 'top-visible';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const number = $event.srcElement.scrollingElement.scrollTop;
    if (number > 20) {
      this.isScrolled = true;
      this.state = 'scrolled';
      this.navbarColor = this.scrolledColor;
      console.log('scrolled!');
    } else if (this.isScrolled && number < 10) {
      this.isScrolled = false;
      this.state = this.invisibleUnscrolled ? 'top-transparent' : 'top-visible';
      this.navbarColor = this.unscrolledColor;
    }
  }

}
