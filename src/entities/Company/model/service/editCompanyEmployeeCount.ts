import { createAsyncThunk } from '@reduxjs/toolkit'
import { CompanyField, type Company } from '../types/company'
import { getCompanies } from './getCompanies'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

export const editCompanyEmployeeCount = createAsyncThunk<Company, { id: string, count: number }, { rejectValue: string }>(
  'companies/editCompanyEmployeeCount',
  async (company, thunkAPI) => {
    try {
      const response = await fetch(`${API}${API_ENDPOINTS.COMPANIES}/${company.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ [CompanyField.EmployeeCount]: company.count })
      })

      if (!response.ok) {
        throw new Error()
      }

      await thunkAPI.dispatch(getCompanies())
      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue('error editCompanyEmployeeCount')
    }
  })
