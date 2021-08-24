import { UserType} from "../Types/Types";
import {Dispatch} from "redux";
import {api} from "../API/api";

export enum ACTION_TYPE {
  LOADING_EMPLOYEES = 'EMPLOYEES/LOADING_EMPLOYEES',
  SET_EMPLOYEES = 'EMPLOYEES/SET_EMPLOYEES',
  ADD_EMPLOY = 'EMPLOYEES/ADD_EMPLOY',
  REMOVE_EMPLOY = 'EMPLOYEES/REMOVE_EMPLOY',
}

const initialState = {
  users: [] as Array<UserType>,
  loading: false
}

type initialStateType = typeof initialState
type emplActionType = ReturnType<typeof setLoading>
                    | ReturnType<typeof setEmployees>
                    | ReturnType<typeof addEmploy>
                    | ReturnType<typeof removeEmploy>

export const employeesReducer = (state: initialStateType = initialState, action: emplActionType) => {
  switch (action.type) {

    case ACTION_TYPE.LOADING_EMPLOYEES: {
      return {
        ...state,
        loading: action.payload
      }
    }

    case ACTION_TYPE.SET_EMPLOYEES: {
      return {
        ...state,
        users: action.payload
      }
    }

    case ACTION_TYPE.ADD_EMPLOY: {
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: +(action.payload.id),
            email: '',
            first_name: action.payload.name,
            last_name: '',
            avatar: ''
          }
        ]
      }
    }

    case ACTION_TYPE.REMOVE_EMPLOY: {
      return {
        ...state,
        users: state.users.filter( (u: UserType) => u.id !== action.payload)
      }
    }

    default:
      return state
  }
}

export const setLoading = (status: boolean) => ({ type: ACTION_TYPE.LOADING_EMPLOYEES, payload: status}as const)
export const setEmployees = (users: Array<UserType>) => ({ type: ACTION_TYPE.SET_EMPLOYEES, payload: users}as const)
export const addEmploy = (id: string, name: string) => ({ type: ACTION_TYPE.ADD_EMPLOY, payload: {id, name}}as const)
export const removeEmploy = (id: number) => ({ type: ACTION_TYPE.REMOVE_EMPLOY, payload: id} as const)

export const fetchEmployeesTC = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try{
    const {
      status,
      data: {data}
    } = await api.getUsers()
    if (status === 200) {
      dispatch(setEmployees(data))
    } else {
      console.log ('ошибка получения данных от сервера')
    }
  }
  catch (error) {
    console.log('Error: ', {...error})
  }
  finally {
    dispatch(setLoading(false))
  }
}

export const removeEmployTC = (id: number) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));

  try {
    const { status } = await api.removeEmploy(id);

    if (status === 204) {
      dispatch(removeEmploy(id));
    }
  } catch (error) {
    console.log('Error: ', { ...error });
  } finally {
    dispatch(setLoading(false));
  }
};

export const addEmployTC = (name: string) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));

  try {
    const {
      status,
      data: { id, name: responseName },
    } = await api.addEmploy(name);

    if (status === 201) {
      dispatch(addEmploy(id, responseName));
    }
  } catch (error) {
    console.log('Error: ', { ...error });
  } finally {
    dispatch(setLoading(false));
  }
};