/** Imports */
import {combineReducers} from 'redux';
import {IStateStore} from '../models/state';
import {posterReducer} from './poster';

export const rootReducer = combineReducers < IStateStore > ({poster: posterReducer});
