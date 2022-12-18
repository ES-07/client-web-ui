export const environment = {
  production: false,
  SITES_API: "",
  cognito: {
    region : "",
    userPoolId : '',
    userPoolWebClientId : '',
    oauth: {
      domain: '',
      scope: ['openid'],
      redirectSignIn:  'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true
      }
    }
  },
  accessKeyId: '',
  secretAccessKey: '',

};