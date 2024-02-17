import { createAsyncThunk } from '@reduxjs/toolkit'
import { EmployeeField, type Employee } from '../types/employee'
import { CompanyField, editCompanyEmployeeCount } from 'entities/Company'
import { type StateSchema } from 'app/providers/StoreProvider'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

export const postEmployee = createAsyncThunk<Employee, Employee, { rejectValue: string, state: StateSchema }>(
  'employees/postEmployee',
  async (newEmployee, thunkAPI) => {
    const { companies } = thunkAPI.getState().companies
    const companyToChange = companies.find(company => company[CompanyField.Id] === newEmployee[EmployeeField.CompanyId])

    try {
      const response = await fetch(`${API}${API_ENDPOINTS.EMPLOYEES}`, {
        method: 'POST',
        body: JSON.stringify(newEmployee)
      })

      if (!response.ok) {
        throw new Error()
      }

      const result: Employee = await response.json()

      if (companyToChange !== undefined) {
        let count = companyToChange[CompanyField.EmployeeCount]
        await thunkAPI.dispatch(editCompanyEmployeeCount({ id: companyToChange[CompanyField.Id] ?? newEmployee[EmployeeField.CompanyId], count: ++count }))
      }

      return result
    } catch (error) {
      return thunkAPI.rejectWithValue('error postEmployee')
    }
  })
