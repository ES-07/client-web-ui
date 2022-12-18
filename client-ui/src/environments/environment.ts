// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SITES_API: 'http://alb-643791497.eu-west-3.elb.amazonaws.com/sites-management-api',
  cognito: {
    region : 'eu-west-3',
    userPoolId : 'eu-west-3_jf78B1lET',
    userPoolWebClientId : '40jrepbggimcpd1tcigpp045ui',
    oauth: {
      domain: 'arn:aws:cognito-idp:eu-west-3:096876465810:userpool/eu-west-3_jf78B1lET',
      scope: ['openid'],
      redirectSignIn:  'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true
      }
    }
  },
  accessKeyId: 'AKIARNDSJR2JHDUDT7KB',
  secretAccessKey: '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',
  region : 'eu-west-3',

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
