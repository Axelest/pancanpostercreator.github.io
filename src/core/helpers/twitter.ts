import Keys from './keys.json';
import jsSHA from 'jssha';

class TwitterAuth {
     private timestamp : number;
     private nonce : string;
     private baseString : string;
     private singningKey : string;
     private signature : string;
     private baseUrl : string;

     constructor() {
          this.baseUrl = 'https://api.twitter.com/1.1/';
          this.timestamp = Math.round(Date.now() / 1000);
          this.nonce = btoa(Keys.consumerKey + ':' + this.timestamp);
          this.baseString = '';
          this.signature = '';
          this.singningKey = this.oAuthSigningKey(Keys.consumerSecret, Keys.accessTokenSecret);
     }

     public getHeaderString() : string {
          return 'OAuth oauth_consumer_key="' + Keys.consumerKey + '", oauth_nonce="' + this.nonce + '", oauth_signature="' + this.signature + '", oauth_signature_method="HMAC-SHA1", oauth_timestamp="' + this.timestamp + '", oauth_token="' + Keys.accessToken + '", oauth_version="1.0"';
     }

     public getAuth(method : string, endpoint : string, reqParams : any) : any {
          this.baseString = this.oAuthBaseString(method, this.baseUrl + endpoint, reqParams, Keys.consumerKey, Keys.accessToken, this.timestamp, this.nonce);
          this.signature = this.oAuthSignature(this.baseString, this.singningKey);
          return this;
     }

     public oAuthBaseString(method : string, url : string, params : any, key : string, token : string, timestamp : number, nonce : string) : string {
          return method + '&' + this.percentEncode(url) + '&' + this.percentEncode(this.genSortedParamStr(params, key, token, timestamp, nonce));
     }

     public oAuthSigningKey(consume_secret : string, token_secret : string) : string {
          return consume_secret + '&' + token_secret;
     }

     public oAuthSignature(base_string : string, signing_key : string) : string {
          const signature = this.hmac_sha1(base_string, signing_key);
          return this.percentEncode(signature);
     }

     public percentEncode(value : string) {
          return encodeURIComponent(value).replace(/[!*()']/g, (char : string) => '%' + char.charCodeAt(0).toString(16));
     }

     public genSortedParamStr(params : any, key : string, token : string, timestamp : number, nonce : string) {
          let paramObject = this.mergeObjects({
               oauth_consumer_key: key,
               oauth_nonce: nonce,
               oauth_signature_method: 'HMAC-SHA1',
               oauth_timestamp: timestamp,
               oauth_token: token,
               oauth_version: '1.0'
          }, params);

          let paramObjKeys = Object.keys(paramObject);
          let len = paramObjKeys.length;
          paramObjKeys.sort();
          let paramStr = paramObjKeys[0] + '=' + paramObject[paramObjKeys[0]];

          for (var i = 1; i < len; i++) {
               paramStr += '&' + paramObjKeys[i] + '=' + this.percentEncode(decodeURIComponent(paramObject[paramObjKeys[i]]));
          }

          return paramStr;
     }

     public mergeObjects(object1 : any, object2 : any) : any {
          for(const attr in object2) {
               object1[attr] = object2[attr];
          }
          return object1;
     }

     public hmac_sha1(string : string, secret : string) : string {
          const shaObj = new jsSHA('SHA-1', 'TEXT');
          shaObj.setHMACKey(secret, 'TEXT');
          shaObj.update(string);
          return shaObj.getHMAC('B64');
     }
}

export default new TwitterAuth();