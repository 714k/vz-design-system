import { Component } from '@angular/core';

@Component({
  selector: 'vz-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent {
  title: string = "";
  anchors: object = {};
}
