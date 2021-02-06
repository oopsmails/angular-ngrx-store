import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './emittest/child/child.component';
import { FormsModule } from '@angular/forms';
import { LoadingStencilModule } from './loading-stencil/loading-stencil.module';
import { TranslationTestComponent } from './translation-test/translation-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TranslationTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    
    LoadingStencilModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
