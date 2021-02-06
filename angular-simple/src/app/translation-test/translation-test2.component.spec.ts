import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
// import { HttpLoaderFactory } from '../app.module';

// import enjson  from '../assets/i18n/en.json';
// import frjson  from '../assets/i18n/fr.json';



import { TranslationTestComponent } from './translation-test.component';

// const TRANSLATIONS_EN = require('../assets/i18n/en.json');
// const TRANSLATIONS_FR = require('../assets/i18n/fr.json');

describe('TranslationTestComponent, test2', () => {
  let component: TranslationTestComponent;
  let fixture: ComponentFixture<TranslationTestComponent>;
  let translateService: TranslateService;
  let injector: Injector;
  // let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TranslationTestComponent
      ],
      imports: [
        HttpClientTestingModule,
        // TranslateModule.forRoot({
        //   loader: {
        //     provide: TranslateLoader,
        //     useFactory: HttpLoaderFactory,
        //     deps: [HttpClient]
        //   }
        // })
      ],
      providers: [TranslateService]
    }).compileComponents();

    injector = getTestBed();
    translateService = injector.get(TranslateService);
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  xit('should getTestDescription', () => {
    expect(component).toBeTruthy();
  });

  xit('should calc test', () => {
    const expected = 'This is a test, 3 of 5';
    translateService.use('en');
    fixture.detectChanges();
    // expect(el.textContent).toContain('This is a test')

    let result = component.getTestDescription();
    expect(result).toEqual(expected);
  });

  xit('should calc test 2, just use Angular TranslateFakeLoader, FakeLoader above is NOT needed!', () => {
    translateService.setTranslation('en', { TEST_DESCRIPTION: 'interpolateParams1 = {{interpolateParams1}} of interpolateParams2 = {{interpolateParams2}}' });
    translateService.use('en');
    fixture.detectChanges();
    const expected = 'interpolateParams1 = 3 of interpolateParams2 = 5';
    let result = component.getTestDescription();
    expect(result).toEqual(expected);
  });

});
