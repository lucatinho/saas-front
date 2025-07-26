import { Component, inject, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-ordem-servico-template',
  imports: [
    HeaderComponent,
    RouterOutlet,
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule,
  ],
  templateUrl: './default-template.component.html',
  styleUrl: './default-template.component.scss',
})
export class DefaultTemplateComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  isMobile = false;
  menuStyle: MatDrawerMode = 'over';

  sideNavMenuOpen = false;

  private breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
        if (result.matches) {
          this.menuStyle = 'over';
        } else {
          this.menuStyle = 'side';
          this.sideNavMenuOpen = true;
          this.drawer.open().then();
        }
        console.log(this.isMobile);
      });
  }

  sideNavMenuController(): void {
    this.sideNavMenuOpen = !this.sideNavMenuOpen;
    if (this.sideNavMenuOpen) {
      this.drawer.open().then();
    } else {
      this.drawer.close().then();
    }
  }
}
