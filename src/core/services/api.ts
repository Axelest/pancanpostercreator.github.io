const apiURL : string = 'https://core.pancan.org/api/poster/email';

/** Api calls */
export const uploadImage = (data : any) => (fetch(apiURL, {
     method: 'post',
     headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
     body: data
}).then(data => data.json()).then(data => data).catch(error => error));
