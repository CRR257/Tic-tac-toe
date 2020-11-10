export interface IIncrementCountAction {
    readonly type: 'INCREMENT';
    value: number;
}
export interface IDecrementCountAction {
    readonly type: 'DECREMENT';
    value: number;
}
export interface IMultiplyCountAction {
    readonly type: 'MULTIPLY';
    value: number;
}
export interface IDivideCountAction {
    readonly type: 'DIVIDE';
    value: number;
}
export interface IResetCountAction {
    readonly type: 'RESET';
}
export type CountActions =
| IIncrementCountAction
| IDecrementCountAction
| IMultiplyCountAction
| IDivideCountAction
| IResetCountAction
