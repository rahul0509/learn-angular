import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
    add = '[Customer Component] Add',
    remove = '[Customer Component] remove'
}

export class ActionEx implements Action {
    type: string;
    payload: any

}

export class CustomerAdd extends ActionEx {
    readonly type = CustomerActionTypes.add;
    constructor(public payload: any){
        super();
    }
}

export class CustomerRemove extends ActionEx {
    readonly type = CustomerActionTypes.remove;
    constructor(public payload: any){
        super();
    }
}