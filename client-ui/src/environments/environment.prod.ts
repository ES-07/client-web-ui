export const environment = {
  production: false,
  SITES_API: 'http://alb-924031478.eu-west-3.elb.amazonaws.com/sites-management-api',
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
