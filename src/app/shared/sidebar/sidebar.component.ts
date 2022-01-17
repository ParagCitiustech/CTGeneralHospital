import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isNurse: boolean = false;
  isAdmin: boolean = false;
  title = 'CTGeneralHospital';
  isExpanded: boolean = true;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isPatient: boolean = true;
  isPhysician: boolean = false;

  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showPatientSubMenu: boolean = false;
  showEmployeeSubMenu : boolean = false;
  showPhysicianSubMenu : boolean = false;




  // disabled link
  enterDetails:boolean=false;
  viewDetails:boolean=false;
  MyVisitHistory:boolean=false;
  downloadMydata:boolean=true;
  appointment:boolean=true;

  constructor(private observer: BreakpointObserver) {}
  
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  
}
