// @flow

import type {State} from '../reducers';

export type GetState = () => State;

export type ApiAction = $Subtype<{
    CALL_API: {|
        types: [string, string, string],
        endpoint: () => Promise<*>
    |}
}>;

export type ApiDispatch = (ApiAction) => Promise<*>;

export type ApiDispatcher = (dispatcher: ApiDispatch, getState?: GetState) => ?Promise<*>;

export type Action = $Subtype<{ type: $Subtype<string> }>;

export type Dispatch = ($Subtype<{ type: $Subtype<string> }>) => Promise<*>;

export type Dispatcher = (dispatcher: Dispatch, getState: GetState) => ?Promise<*>;


export type Store = { dispatch: ApiDispatch | Dispatch, getState: GetState };
