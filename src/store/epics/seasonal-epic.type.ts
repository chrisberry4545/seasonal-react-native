import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { IState } from '../../interfaces';

export type SeasonalEpic = Epic<Action, Action, IState, {}>;
