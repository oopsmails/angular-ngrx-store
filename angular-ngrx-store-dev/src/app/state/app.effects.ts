import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

declare const ADID;
declare const WL;
const DEFAULT_INITIAL_ROUTE = 'accounts/summary';

/**
 * Application module effects
 * @export
 * @class AppEffects
 */
@Injectable()
export class AppEffects {

//   /**
//    * The effect for initializing the app
//    * @memberof AppEffects
//    */
//   @Effect() appEffect = this.actions.pipe(
//     ofType(Types.INITIALIZE_APP),
//     mergeMap(() => this.initializeApp()),
//     catchError((error) => this.initializeAppError(error))
// )

//   /**
//    * Effect to get init app rating after app init
//    * @memberof AppEffects
//    */
//   @Effect({dispatch: false}) intiAppRating = this.actions.pipe(
//     ofType(Types.INITIALIZE_APP_FULFILLED),
//     tap(() => this.initializeAppRating())
// )

  
  constructor(
    private store: Store<any>,
    private router: Router,
    // private zone: NgZone,
    // private actions: Actions,
    // private appActions: AppActions,
    // private loginActions: LoginActions,
    // private localStorage: LocalStorageService,
    // private networkClient: NetworkClient,
    // private backNavigationService: BackNavigationService,
    // private translationService: TranslationService,
    // private analyticsService: AnalyticsService,
    // private maintenanceService: MaintenanceService,
    // private utilsService: UtilsService,
    // private mobilePayService: MobilePayActivation,
    // private wlService: WLService,
    // private deepLinkLoadingService: DeepLinkLoadingService,
    // private errorService: ErrorService,
    // private errorActions: ErrorActions,
    // private applyActions: ApplyActions,
    // private splashScreenService: SplashScreenService,
    // private verifiedMeActions: VerifiedMeActions,
    // private isamService: ISAMService,
    // private appRateService: AppRateService,
    // private cmsActions: CmsActions,
    // private authGuardService: AuthGuardService, // Import will create the subscribers to check for auth guard
    // private nativeManager: NativeManager,
    // private digitalOnboardingSvc: DigitalOnboardingService,
    // private digitalOnboardingActions: DigitalOnboardingActions,
    // private biometricUtilsService: BiometricUtilsService,
    // private ccRegAutoLoginSvc : CcRegAutoLoginService,
    // private ccRegAutoLoginActions : CcRegAutoLoginActions,
    // private transferActions: TransferActions
  ) {
    // this is a fix for ios 13 beta 6 accessibility mode on input fields missing value on navigate to different pages (ticket: RELMAN-1153)
    // this may not be needed with new updates of ios 13

    // this.router.events.subscribe((event: NavigationStart) => {
    //   if (event instanceof NavigationStart) {
    //     try {
    //       (document.activeElement as HTMLElement).blur();
    //     } catch (err) { }
    //   }
    // });

    // // Workaround to stop keyboard from dismissing when tapped inside text inputs, preventing proper pasting on iOS 12
    // // Only fire blur() event when tap is outside of input or textarea
    // if (UtilsService.isIOS) {
    //   fromEvent(document, 'touchend').subscribe((event: Event) => {
    //     const target = event.target as HTMLElement;
    //     const targetName = target.tagName.toUpperCase();
    //     if (targetName !== 'INPUT' && targetName !== 'TEXTAREA') {
    //       try {
    //         (document.activeElement as HTMLElement).blur();
    //       } catch (err) { }
    //     }
    //   });
    // }

  }

  

  /**
   * Helper function to extract multiple params from deep link URL
   * @private
   * @param {string} deeplink 
   * @return {URLSearchParams} url search parameters
   * @memberof AppEffects
   */
  private retrieveParamsFromUrl(deeplink: string): URLSearchParams {
    const queryParams = new URLSearchParams(deeplink);
    if (queryParams) {
      return queryParams;
    } else {
      return null;
    }
  }
}
