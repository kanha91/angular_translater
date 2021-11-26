import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translate';
  supportLanguage = ['en', 'fr' , 'hi','ta','ba'];
  constructor(private translateService : TranslateService){
    this.translateService.addLangs(this.supportLanguage);
    this.translateService.setDefaultLang('en');
    const browerLanguage = this.translateService.getBrowserLang() || '';
    this.translateService.use(browerLanguage);
  }

  selectLang(lang : any){
    this.translateService.use(lang.target.value)
  }
}
