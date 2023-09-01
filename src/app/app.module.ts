import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { registerLocaleData }      from '@angular/common';
import en                          from '@angular/common/locales/en';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N }          from 'ng-zorro-antd/i18n';
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';

registerLocaleData(en);

const BROWSER_MODULES = [
  BrowserModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: [
    BROWSER_MODULES,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
