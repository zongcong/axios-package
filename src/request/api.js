import {get, post} from './http'

export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p)

export const apiTest = p => get('api/v1/users/my_address/address_edit_before', p)
