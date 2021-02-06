From: https://github.com/ngx-translate/core/issues/636

- pherris commented on Oct 5, 2017
I'm just coming up to speed on this stack and was trying to wrap some tests around an Ionic component. I ran across this same problem and solved it by looking at translate.service.spec.ts (https://github.com/ngx-translate/core/blob/master/tests/translate.service.spec.ts) and the comments in this thread.

Essentially I had to define TranslateModule in imports and provide it a TranslateLoader called FakeLoader which wrapped my manually defined translations (it'd be nice to use the actual file here). Next I had to get the TranslateService instance and set the language to use in my test.

import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import {Injector} from "@angular/core";
import { IonicModule, Platform, NavController } from 'ionic-angular';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { CardsPage } from './cards';

import {
  PlatformMock,
  NavMock,
} from '../../../test-config/mocks-ionic';

let translations: any = {"CARDS_TITLE": "This is a test"};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}

describe('CardsPage (inline template)', () => {
  let comp:      CardsPage;
  let fixture:   ComponentFixture<CardsPage>;
  let de:        DebugElement;
  let el:        HTMLElement;
  let translate: TranslateService;
  let injector:  Injector;

  it('true is true', () => expect(true).toBe(true));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPage],
      imports: [
        IonicModule.forRoot(CardsPage),
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        })
      ],
      providers: [
        { provide: Platform, useClass: PlatformMock },
        { provide: NavController, useClass: NavMock },
      ]
    });
    injector = getTestBed();
    translate = injector.get(TranslateService);

    fixture = TestBed.createComponent(CardsPage);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('ion-title'));
    el = de.nativeElement;
  });

  it('should include the title of the cards page', () => {
    translate.use('en');
    fixture.detectChanges();
    expect(el.textContent).toContain('This is a test')
  });
});
