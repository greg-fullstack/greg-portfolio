import { Component, computed, inject, signal } from '@angular/core';
import { hardSkills, skillCategories } from "./dataSkills";
import { TranslateModule } from "@ngx-translate/core";
import { SvgIconComponent } from "angular-svg-icon";
import { IsTranslationLoadedService } from '../../core/services/is-translation-loaded.service';
import { LoaderComponent } from "../../components/loader/loader/loader.component";

@Component({
    selector: 'app-skills',
    standalone: true,
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [
        TranslateModule,
        SvgIconComponent,
        LoaderComponent
    ]
})
export class SkillsComponent {
  public isContentLoadedService = inject(IsTranslationLoadedService);

  public categories = skillCategories;
  public searchTerm = signal('');
  public selectedCategory = signal('All');

  public filteredSkills = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const category = this.selectedCategory();

    return hardSkills.filter((skill) => {
      const matchesCategory = category === 'All' || skill.category === category;
      const matchesTerm = !term || skill.name.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  });

  public onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

  public onSelectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
