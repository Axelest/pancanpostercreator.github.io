/** Import dependencies */
import {all, put, takeEvery} from 'redux-saga/effects';
import {
     SET_LAYOUT,
     SET_LANGUAGE,
     SET_STEP,
     SET_THEME,
     SET_MESSAGE,
     SET_IMAGE,
     SET_LOGO,
     POSTER_CREATE,
     POSTER_SCALE,
     SET_TITLE,
     IMAGE_SET_POSITION,
     setLayout,
     setLanguage,
     setStep,
     setTheme,
     setMessage,
     setImage,
     setLogo,
     setPoster,
     setSize,
     setTitle,
     setImagePosition

} from '../actions/poster';

/** Watcher */
function * eventWatcher() {
     yield takeEvery(SET_LAYOUT, layout);
     yield takeEvery(SET_LANGUAGE, language);
     yield takeEvery(SET_STEP, stepper);
     yield takeEvery(SET_THEME, theme);
     yield takeEvery(SET_MESSAGE, message);
     yield takeEvery(SET_IMAGE, image);
     yield takeEvery(SET_LOGO, logo);
     yield takeEvery(POSTER_CREATE, poster);
     yield takeEvery(POSTER_SCALE, scalePoster);
     yield takeEvery(SET_TITLE, titleSet);
     yield takeEvery(IMAGE_SET_POSITION, imagePosition);
}

/** set layout */
function * layout(type : any) {
     let layout : any;
     switch (type.payload) {
          case 'poster message only':
               layout = {
                    type: 'poster message only',
                    layoutType: 1
               }
               break;
          case 'poster message and image':
               layout = {
                    type: 'poster message and image',
                    layoutType: 2
               }
               break;
          case 'post message only':
               layout = {
                    type: 'post message only',
                    layoutType: 3
               }
               break;
          case 'post image':
               layout = {
                    type: 'post image',
                    layoutType: 4
               }
               break;
     }
     yield put(setLayout(layout));
}

/** set language */
function * language(type : any) {
     yield put(setLanguage(type.payload));
}

/** update step */
function * stepper(step : any) {
     yield put(setStep(step.payload));
}

/** set theme */
function * theme(theme : any) {
     yield put(setTheme(theme.payload));
}

/** set message */
function * message(message : any) {
     yield put(setMessage(message.payload));
}

/** set image */
function * image(image : any) {
     yield put(setImage(image.path));
}

/** set logo */
function * logo(logo : any) {
     yield put(setLogo(logo.path));
}

/** poster creation  */
function * poster(poster : any) {
     yield put(setPoster(poster.payload));
}

/** poster scale */
function * scalePoster(scale : any) {
     yield put(setSize(scale.payload));
}

/** poster title */
function * titleSet(title : any) {
     yield put(setTitle(title.payload));
}

/** image position */
function * imagePosition(data : any) {
     yield put(setImagePosition(data.payload.x, data.payload.y));
}

/** Root saga */
export function * rootSaga() {
     const sagas = [eventWatcher()];
     yield all(sagas);
}