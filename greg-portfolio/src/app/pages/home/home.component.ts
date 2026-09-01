import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { SvgIconComponent } from "angular-svg-icon";
import { IsTranslationLoadedService } from "../../core/services/is-translation-loaded.service";
import { LoaderComponent } from "../../components/loader/loader/loader.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
    imports: [
        TranslateModule,
        CommonModule,
        RouterLink,
        SvgIconComponent,
        LoaderComponent,
    ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    private translateService = inject(TranslateService);
    private http = inject(HttpClient);

    public isContentLoadedService = inject(IsTranslationLoadedService);

    public downloadCV(): void {
        const lang = this.translateService.currentLang || 'en';
        const fileUrl = `./assets/pages/about/cv/resume-${lang}.pdf`;
        this.http.get(fileUrl, { responseType: 'blob' }).subscribe(blob => {
            const a = document.createElement('a');
            const objectUrl = URL.createObjectURL(blob);
            a.href = objectUrl;
            a.download = 'Grachia_Martirosian_CV.pdf';
            a.click();
            URL.revokeObjectURL(objectUrl);
        }, error => {
            console.error('Download error:', error);
        });
    }
}
