import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  icon?: string;
  link: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'customers', icon: 'bi bi-briefcase-fill', link: 'customers' },
    { title: 'contacts', icon: 'bi bi-journal', link: 'contacts' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
