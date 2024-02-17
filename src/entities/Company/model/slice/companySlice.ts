import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type CompanySchema } from '../types/company'
import { getCompanies } from '../service/getCompanies'
import { postCompany } from '../service/postCompany'
import { deleteCompanies } from '../service/deleteCompanies'
import { editCompanyEmployeeCount } from '../service/editCompanyEmployeeCount'
import { editCompany } from '../service/editCompany'

const initialState: CompanySchema = {
  companies: [],
  selectedCompanyIds: [],
  isLoading: false
}

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setSelectedCompanyIds: (state, action: PayloadAction<string[]>) => {
      state.selectedCompanyIds = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.companies = action.payload
        }
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
      .addCase(postCompany.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(postCompany.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.companies = [...state.companies, action.payload]
        }
      })
      .addCase(postCompany.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
      .addCase(deleteCompanies.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(deleteCompanies.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(deleteCompanies.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
      .addCase(editCompanyEmployeeCount.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(editCompanyEmployeeCount.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(editCompanyEmployeeCount.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
      .addCase(editCompany.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(editCompany.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(editCompany.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
  }
})

export const { setSelectedCompanyIds } = companySlice.actions
export const { reducer: companyReducer } = companySlice
