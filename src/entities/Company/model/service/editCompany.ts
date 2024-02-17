import { createAsyncThunk } from '@reduxjs/toolkit'
import { CompanyField, type Company } from '../types/company'
import { getCompanies } from './getCompanies'
import { API, API_ENDPOINTS } from 'shared/constants/constants'

export const editCompany = createAsyncThunk<Company, Company, { rejectValue: string }>(
  'companies/editCompany',
  async (newCompany, thunkAPI) => {
    console.log('newCompany', newCompany)

    try {
      const response = await fetch(`${API}${API_ENDPOINTS.COMPANIES}/${newCompany[CompanyField.Id]}`, {
        method: 'PUT',
        body: JSON.stringify(newCompany)
      })

      if (!response.ok) {
        throw new Error()
      }

      await thunkAPI.dispatch(getCompanies())
      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue('error editCompany')
    }
  })
