import axios, {AxiosResponse, AxiosError} from 'axios';
import $ from 'jquery';

/** Email Poster Image  */
export const emailPoster = (data : any) => axios({url: '/poster/email', method: 'post', baseURL: 'https://core.pancan.org/api/', responseType: 'json', params: data}).then((response : AxiosResponse) => response).catch((error : AxiosError) => error);

/** Api calls */
export const uploadImage = (data : any) => (fetch('https://core.pancan.org/api/poster/email', {
     method: 'post',
     headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
     body: data
}).then(data => data.json()).then(data => data).catch(error => error));

export const sendEmail = (data : any) => {
     const settings : any = {
          method: 'post',
          crossDomain: true,
          url: 'https://core.pancan.org/api/poster/email',
          headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
               'Access-Control-Allow-Origin': '*'
          },
          data: data
     };
     $
          .ajax(settings)
          .done(data => console.log(data))
          .catch(error => console.log(error))
}