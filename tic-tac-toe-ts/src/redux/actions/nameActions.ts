export interface ISetName1Action {
    readonly type: 'SET_NAME_1';
    payload: string;
}
export interface ISetName2Action {
    readonly type: 'SET_NAME_2';
    payload: string;
}

export type NameActions =
| ISetName1Action
| ISetName2Action