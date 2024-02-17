import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Company } from '../types/company'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

export const postCompany = createAsyncThunk<Company, Company, { rejectValue: string }>(
  'companies/postCompany',
  async (newCompany, thunkAPI) => {
    try {
      const response = await fetch(`${API}${API_ENDPOINTS.COMPANIES}`, {
        method: 'POST',
        body: JSON.stringify(newCompany)
      })

      if (!response.ok) {
        throw new Error()
      }

      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue('error postCompany')
    }
  })
