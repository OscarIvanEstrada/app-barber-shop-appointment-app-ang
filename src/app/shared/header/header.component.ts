
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GAService } from 'src/app/core/services/ga.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  private lastPoppedUrl: string;


  constructor(
    private ga: GAService) { }


  ngOnInit() {

  }

  @ViewChild('mobMenu') mobMenu: ElementRef;

  toggleMenu() {

    //this.mobMenu.nativeElement.classList
    if (this.mobMenu.nativeElement.className === 'md:hidden') {
      this.mobMenu.nativeElement.className = 'hidden'
    } else {
      this.mobMenu.nativeElement.className = 'md:hidden'
    }
  }


}
