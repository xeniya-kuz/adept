import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Company } from '../types/company'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const getCompanies = createAsyncThunk<Company[], void, { rejectValue: string }>(
  'companies/getCompanies',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${API}${API_ENDPOINTS.COMPANIES}`)

      if (!response.ok) {
        throw new Error()
      }

      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue('error companies')
    }
  })
