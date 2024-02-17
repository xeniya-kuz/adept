import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Employee } from '../types/employee'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const getEmployees = createAsyncThunk<Employee[], void, { rejectValue: string }>(
  'employees/getEmployees',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${API}${API_ENDPOINTS.EMPLOYEES}`)

      if (!response.ok) {
        throw new Error()
      }

      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue('error employees')
    }
  })
