import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";
import { MenuLinkComponent } from "./menu-link/menu-link.component";
import { MenuToggleService } from "../../core/services/menu-toggle.service";
import { langs } from "./dataRouters";
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    BurgerMenuComponent,
    MenuLinkComponent,
    SvgIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private translateService = inject(TranslateService);

  public menuToggleService = inject(MenuToggleService);
  public selectedLang = '';
  public langs = langs;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {
  }

  public ngOnInit(): void {
    this.selectedLang = this.translateService.currentLang || 'en';
    this.document.documentElement.lang = this.selectedLang;
  }

  public onClickedLang(lang: string): void {
    this.selectedLang = lang;
    this.menuToggleService.onMenuActive(false);
    this.document.documentElement.lang = lang;


    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang.toLowerCase());
      this.translateService.use(lang.toLowerCase())
    }
  }
}
