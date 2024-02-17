import { createAsyncThunk } from '@reduxjs/toolkit'
import { getEmployees } from './getEmployees'
import { setSelectedEmployeeIds } from '../slice/employeeSlice'
import { type StateSchema } from 'app/providers/StoreProvider'
import { CompanyField, editCompanyEmployeeCount } from 'entities/Company'
import { EmployeeField } from '../types/employee'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const deleteEmployees = createAsyncThunk<void, string[], { rejectValue: string, state: StateSchema }>(
  'employees/deleteEmployees',
  async (employeeIds, thunkAPI) => {
    const employeesToDelete = thunkAPI.getState().employees?.currentEmployees
      ?.filter(employee => employeeIds.includes(employee[EmployeeField.Id] ?? ''))
    const companies = [...thunkAPI.getState().companies.companies]

    if (employeesToDelete !== undefined) {
      const delFetch = employeesToDelete.map(async (employee) => {
        try {
          const response = await fetch(`${API}${API_ENDPOINTS.EMPLOYEES}/${employee[EmployeeField.Id]}`, {
            method: 'DELETE'
          })

          const companyToChangeIndex = companies.findIndex(company => company[CompanyField.Id] === employee[EmployeeField.CompanyId])

          if (!response.ok) {
            throw new Error()
          }

          if (companyToChangeIndex !== -1) {
            const companyToChange = companies[companyToChangeIndex]
            const count = companyToChange[CompanyField.EmployeeCount] - 1
            // т.к. стэйт не меняется пока санк не выполнится полностью
            companies.splice(companyToChangeIndex, 1, { ...companyToChange, [CompanyField.EmployeeCount]: count })
            await thunkAPI.dispatch(editCompanyEmployeeCount({ id: companyToChange[CompanyField.Id] ?? employee[EmployeeField.CompanyId], count }))
          }
        } catch (error) {
          return thunkAPI.rejectWithValue('error deleteEmployees')
        }
      })
      await Promise.all(delFetch)
    }

    thunkAPI.dispatch(setSelectedEmployeeIds([]))
    await thunkAPI.dispatch(getEmployees())
  })
