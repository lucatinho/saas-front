import { Component, inject, output } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatExpansionPanel } from '@angular/material/expansion';
import { filter } from 'rxjs';
import { NgClass } from '@angular/common';
import { IMenuItem } from '../../../shared/interfaces/IMenuItems.interface';
import { MenuItems } from '../../../shared/utils/menu-items.utils';

@Component({
  selector: 'app-menu',
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    RouterLink,
    MatExpansionModule,
    MatExpansionPanel,
    NgClass,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  items: IMenuItem[] = MenuItems.items;
  selectedItem = output();
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateActiveItems(event.urlAfterRedirects);
      });
  }

  itemClicked(): void {
    this.selectedItem.emit();
  }

  private updateActiveItems(currentUrl: string): void {
    this.items.forEach((item) => {
      if (item.children) {
        item.open = item.children.some((child) =>
          currentUrl.includes(child.route!),
        );
        item.children.forEach((child) => {
          child.active = currentUrl.includes(child.route!);
        });
      } else {
        item.active = currentUrl.includes(item.route!);
      }
    });
  }
}
