import dot from "dot-prop-immutable"

export type Action = {
   type: 'errors' | 'values' | 'touched' | 'isValid',
   payload: any
}

export type BaseState<T> = {
   errors: T,
   values: T,
   touched: T,
   isValid: boolean
}


export function useFormTestReducer<T extends BaseState<T['values']>>(state: T, { type, payload }: Action): BaseState<T['values']> {
   return dot.set(state, type, payload)
}