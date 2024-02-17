import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCompanies } from './getCompanies'
import { type StateSchema } from 'app/providers/StoreProvider'
import { EmployeeField, deleteEmployees } from 'entities/Employee'
import { setSelectedCompanyIds } from '../slice/companySlice'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const deleteCompanies = createAsyncThunk<void, string[], { rejectValue: string, state: StateSchema }>(
  'companies/deleteCompanies',
  async (companyIds, thunkAPI) => {
    const employees = thunkAPI.getState().employees?.currentEmployees
    let employeeIds: string[] = []
    if (employees !== undefined) {
      employeeIds = employees.map(employee => employee[EmployeeField.Id] ?? '')
    }

    const delFetch = companyIds.map(async (id) => {
      try {
        const companyResponse = await fetch(`${API}${API_ENDPOINTS.COMPANIES}/${id}`, {
          method: 'DELETE'
        })

        if (!companyResponse.ok) {
          throw new Error()
        }
      } catch (error) {
        return thunkAPI.rejectWithValue('error deleteCompany')
      }
    })

    await Promise.all(delFetch)
    thunkAPI.dispatch(setSelectedCompanyIds([]))
    await thunkAPI.dispatch(getCompanies())
    // удаляем сотрудников удаленных компаний
    await thunkAPI.dispatch(deleteEmployees(employeeIds))
  })
