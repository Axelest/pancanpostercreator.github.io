export class PopupWindow {
     private screenLeft : number;
     private screenTop : number;
     private screenWidth : number;
     private screenHeight : number;
     private zoom : number;

     constructor() {
          this.screenLeft = window.screenLeft || window.screenX;
          this.screenTop = window.screenTop || window.screenY;
          this.screenWidth = window.innerWidth || (document.documentElement.clientWidth)
               ? document.documentElement.clientWidth
               : screen.width;
          this.screenHeight = window.innerHeight || (document.documentElement.clientHeight)
               ? document.documentElement.clientHeight
               : screen.height;
          this.zoom = this.screenWidth / window.screen.availWidth;
          return this;
     }

     public getWindow(url : string, title : string, width : number, height : number) : void {
          const left: number = (this.screenWidth - width) / 2 / this.zoom + this.screenLeft;
          const top: number = (this.screenHeight - height) / 2 / this.zoom + this.screenTop;
          const configString: string = 'scrollbars=yes, width=' + width / this.zoom + ', height=' + height / this.zoom + ', top=' + top + ', left=' + left;
          const newWindow: any = window.open(url, title, configString);
          if (window.focus) {
               newWindow.focus();
          }
     }

}
