import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRouterModule } from './router/router.module';
import { AuthInterceptor } from './auth-interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/state/effects';
import { AuthReducer } from './core/state/reducers';
import { CourseReducer } from './catalog/state/reducers';
import { CourseEffects } from './catalog/state/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouterModule,
    HttpClientModule,
    StoreModule.forRoot({auth: AuthReducer, course: CourseReducer}),
    EffectsModule.forRoot([AuthEffects, CourseEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
