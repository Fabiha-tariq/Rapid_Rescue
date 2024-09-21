import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Ambulance',  icon:'ni-ambulance text-blue', class: '' },
    { path: '/maps', title: 'Emergency Teams ',  icon:'ni-user-run text-orange', class: '' },
    { path: '/user-profile', title: 'Patients',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Shift',  icon:'ni-vector text-red', class: '' },
    { path: '/tables', title: 'Status',  icon:'ni-bullet-list-67 text-primary', class: '' },
    { path: '/tables', title: 'Drivers',  icon:'ni-circle-08 text-blue', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Patients Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/register', title: 'Patients Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/register', title: 'Patients Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/register', title: 'Patients Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
