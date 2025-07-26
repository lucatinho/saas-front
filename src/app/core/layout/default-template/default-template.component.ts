import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-ordem-servico-template',
  imports: [
    HeaderComponent,
    RouterOutlet,
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule,
    MenuComponent,
  ],
  templateUrl: './default-template.component.html',
  styleUrl: './default-template.component.scss',
})
export class DefaultTemplateComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  isMobile = false;
  menuStyle: MatDrawerMode = 'over';

  sideNavMenuOpen = false;

  private breakpointObserver = inject(BreakpointObserver);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .subscribe((result) => {
          this.isMobile = result.matches;
          this.sideNavMenuOpen = !result.matches;
          if (result.matches) {
            this.menuStyle = 'over';
            this.sideNavMenuController(false);
          } else {
            this.menuStyle = 'side';
            this.sideNavMenuController(true);
          }
        });
    });
  }

  buttonHeaderMenu(): void {
    this.sideNavMenuController(!this.sideNavMenuOpen);
  }

  private sideNavMenuController(status: boolean): void {
    this.sideNavMenuOpen = status;
    if (status) {
      this.drawer.open().then();
    } else {
      this.drawer.close().then();
    }
  }
}
