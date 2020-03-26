import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingReducer } from './store/reducers/shopping.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // StoreModule.forRoot(INITIAL_REDUCERS, {
    //   initialState: {
    //     ...INITIAL_STATE
    //   }
    // }),
    StoreModule.forRoot({
      shopping: ShoppingReducer
    })
  ],
  providers: [
    // {
    //   provide: INITIAL_STATE,
    //   useValue: getInitialStates()
    // },
    // {
    //   provide: INITIAL_REDUCERS,
    //   useValue: getReducers()
    // },
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: '/'
    // },
    // {
    //   provide: RouterStateSerializer,
    //   useClass: CustomRouterStateSerializer

    // },
    // AppActions,
    // ErrorService,
    // UtilsService,
    // AdobeAnalyticsService,
    // ErrorConfigService,
    // ErrorActions,
    // ApiTokenService,
    // BmoActionSheetFactory,
    // ToastActions,
    // StateBuilderService,
    // AlertDetailActions,
    // FlowManagerService,
    // CsgLogoutService,
    // SessionTimerService,
    // CsgPingService,
    // ApiAlertsService,
    // GetLongResopnseService,
    // ScriptService,
    // PercentPipe,
    // CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
