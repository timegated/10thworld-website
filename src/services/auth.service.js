import * as Msal from 'msal';

export default class Authservice {
  constructor() {
    let PROD_REDIRECT_URI = "https://10th.world";
    let redirectUri = window.location.origin;
    if (window.location.hostname !== '127.0.0.1') {
      redirectUri = PROD_REDIRECT_URI;
    }
    this.applicationConfig = {
      clientID: 'd81e44a1-c513-4d80-b9f5-93e4533a94dd',
      graphScopes: ['user.read']
    };
    this.app = new Msal.UserAgentApplication(
      this.applicationConfig.clientID,
      '', () => {
        
      },
      {
        redirectUri
      }
    );
  }

  login = () => {
    return this.app.loginPopup(this.applicationConfig.graphScopes).then(idToken => {
      const user = this.app.getAccount();
      if (user) {
        return user;
      } else {
        return null;
      }
    }, () => {
      return null;
    })
  }

  logout = () => {
    this.app.logout();
  }

  getToken = () => {
    return this.app.acquireTokenSilent(this.applicationConfig.graphScopes).then(accessToken => {
      return accessToken;
    }, error => {
      return this.app.acquireTokenPopup(this.applicationConfig.graphScopes).then(accessToken => {
        return accessToken
      }, error => {
        console.error(error)
      })
    })
  }
}
