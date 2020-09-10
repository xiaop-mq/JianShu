// 对action类型进行封装

import { INPUT_TODO_ITEM, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ITEM, GET_INIT_LIST } from './actionTypes'

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
export const InitListItem = (data) =>({
    type: INIT_LIST_ITEM,
    data
})
export const getInitList = () =>({
    type: GET_INIT_LIST
})
