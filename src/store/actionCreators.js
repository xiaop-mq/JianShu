// 对action类型进行封装

import { INPUT_TODO_ITEM, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

export const getInputItemAction = (value) =>({
    type: INPUT_TODO_ITEM,
    value
})
export const getAddItemAction = () =>({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) =>({
    type: DELETE_TODO_ITEM,
    index
})