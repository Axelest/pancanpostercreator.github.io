/** Action Types */
/** LAYOUT */
export const SET_LAYOUT = 'SET_LAYOUT';
export const LAYOUT_SET = 'LAYOUT_SET';

/** LANGUAGE */
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const LANGUAGE_SET = 'LANGUAGE_SET';

/** IMAGE */
export const SET_IMAGE = 'SET_IMAGE';
export const IMAGE_SET = 'IMAGE_SET';

/** LOGO */
export const SET_LOGO = 'SET_LOGO';
export const LOGO_SET = 'LOGO_SET';

/** MESSAGE */
export const SET_MESSAGE = 'SET_MESSAGE';
export const MESSAGE_SET = 'MESSAGE_SET';

/** TITLE */
export const SET_TITLE = 'SET_TITLE';
export const TITLE_SET = 'TITLE_SET';

/** SOCIAL */
export const SET_SOCIAL = 'SET_SOCIAL';
export const SOCIAL_SET = 'SOCIAL_SET';

/** STEP */
export const SET_STEP = 'SET_STEP';
export const STEP_SET = 'STEP_SET';

/** THEME */
export const SET_THEME = 'SET_THEME';
export const THEME_SET = 'THEME_SET';

/** Final Poster */
export const POSTER_CREATE = 'POSTER_CREATE';
export const POSTER_CREATE_SUCCESS = 'POSTER_CREATE_SUCCESS';

/** Scale poster */
export const POSTER_SCALE = 'POSTER_SCALE';
export const SCALE_SET = 'SCALE_SET';

/** Action Handlers */
export const setLayout = (layout : any) => ({type: LAYOUT_SET, payload: layout});
export const setLanguage = (language : string) => ({type: LANGUAGE_SET, payload: {
          language
     }});
export const setStep = (step : number) => ({type: STEP_SET, payload: {
          step
     }});
export const setTheme = (theme : string) => ({type: THEME_SET, payload: {
          theme
     }})
export const setImage = (image : string) => ({type: IMAGE_SET, payload: {
          image
     }});
export const setLogo = (logo : string) => ({type: LOGO_SET, payload: {
          logo
     }});
export const setMessage = (message : string) => ({type: MESSAGE_SET, payload: {
          message
     }});
export const setSocial = (type : string) => ({type: SOCIAL_SET, payload: type});
export const setPoster = (posterImage : any) => ({type: POSTER_CREATE_SUCCESS, payload: {
          posterImage
     }});

export const setSize = (scale : number) => ({type: SCALE_SET, payload: {
          scale
     }});

export const setTitle = (title : string) => ({type: TITLE_SET, payload: {
          title
     }});
