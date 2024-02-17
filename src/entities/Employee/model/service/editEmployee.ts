import { createAsyncThunk } from '@reduxjs/toolkit'
import { API, API_ENDPOINTS } from 'shared/constants/constants'
import { EmployeeField, type Employee } from '../types/employee'

export const editEmployee = createAsyncThunk<Employee, Employee, { rejectValue: string }>(
  'employees/editEmployee',
  async (newEmployee, thunkAPI) => {
    try {
      const response = await fetch(`${API}${API_ENDPOINTS.EMPLOYEES}/${newEmployee[EmployeeField.Id]}`, {
        method: 'PUT',
        body: JSON.stringify(newEmployee)
      })

      if (!response.ok) {
        throw new Error()
      }

      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue('error editEmployee')
    }
  })
