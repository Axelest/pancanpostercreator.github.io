/** Imports */
import {
     LAYOUT_SET,
     STEP_SET,
     LANGUAGE_SET,
     THEME_SET,
     MESSAGE_SET,
     LOGO_SET,
     IMAGE_SET,
     POSTER_CREATE_SUCCESS,
     SCALE_SET,
     TITLE_SET
} from '../actions/poster';
import {IPoster} from '../models/poster';

const initPoster = () : IPoster => ({
     step: 1,
     type: 'poster message only',
     layoutType: 1,
     language: 'english',
     message: 'Sapiens autem semper beatus est et est aliquando in dolore',
     createdDate: Date(),
     shareNetwork: '',
     theme: 'pancan-purple',
     image: 'https://via.placeholder.com/650',
     logo: 'https://www.pancan.org//wp-content/uploads/2018/05/pancan-logo.png',
     posterImage: {},
     scale: 1,
     title: 'Title'
});

export const posterReducer = (state = initPoster(), action : any) => {
     switch (action.type) {
          case LAYOUT_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case STEP_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case LANGUAGE_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case THEME_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case MESSAGE_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case LOGO_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case IMAGE_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case POSTER_CREATE_SUCCESS:
               return {
                    ...state,
                    ...action.payload
               }
          case SCALE_SET:
               return {
                    ...state,
                    ...action.payload
               }
          case TITLE_SET:
               return {
                    ...state,
                    ...action.payload
               }
          default:
               return state;
     }
}