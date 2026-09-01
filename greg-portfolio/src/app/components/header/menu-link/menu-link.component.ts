import {Component, inject} from '@angular/core';
import { dataRouters } from "../dataRouters";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MenuToggleService } from "../../../core/services/menu-toggle.service";

interface DataRoutersInterfaces {
  path: string;
  label: string;
  title: string;
}

@Component({
  selector: 'app-menu-link',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-link.component.html',
  styleUrl: './menu-link.component.scss'
})
export class MenuLinkComponent {
  public dataRouters: Array<DataRoutersInterfaces> = dataRouters;

  public menuToggleService = inject(MenuToggleService);

  public onClickMenuItem(): void {
    this.menuToggleService.onMenuActive(false)
  }
}
