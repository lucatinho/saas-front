import { Component, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatIcon, MatIconButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sideNavMenuOpen = output();

  menuButton(): void {
    this.sideNavMenuOpen.emit();
  }
}
