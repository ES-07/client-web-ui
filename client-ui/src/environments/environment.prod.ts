export const environment = {
  production: true,
  cognito: {
    region : 'eu-west-3',
    userPoolId : 'eu-west-3_aEMzGgaf2',
    userPoolWebClientId : '43t2qf9guq3a48h1m2c6ukekep',
    oauth: {
      domain: 'arn:aws:cognito-idp:eu-west-3:656008897128:userpool/eu-west-3_aEMzGgaf2',
      scope: ['openid'],
      redirectSignIn:  'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true
      }
    }
  }
};
