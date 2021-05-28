import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDiv : boolean = false;
  showDivMobile : boolean = false;
  showItemsMobile : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
