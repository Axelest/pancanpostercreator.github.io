declare const FB : any;

export class Facebook {
     private appId : string;

     constructor() {
          this.appId = '111791916137604';
          this.init();
     }

     public login() {
          FB.login();
     }

     public status() {
          FB.getLoginStatus((response : any) => console.log(response));
     }

     init() {
          let js,
               id = 'facebook-jssdk',
               ref : any = document.getElementsByTagName('script')[0];

          if (document.getElementById(id)) {
               return;
          }

          js = document.createElement('script');
          js.id = id;
          js.async = true;
          js.src = "https://connect.facebook.net/en_US/sdk.js";

          ref
               .parentNode
               .insertBefore(js, ref);

          js.onload = results => this.initSDK();
     }

     initSDK() {
          FB.init({appId: this.appId, autoLogAppEvents: true, xfbml: true, version: 'v3.2'});
     }
}