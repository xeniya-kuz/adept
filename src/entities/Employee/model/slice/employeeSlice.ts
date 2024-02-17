import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EmployeeField, type Employee, type EmployeeSchema } from '../types/employee'
import { getEmployees } from '../service/getEmployees'
import { postEmployee } from '../service/postEmployee'
import { deleteEmployees } from '../service/deleteEmployees'
import { editEmployee } from '../service/editEmployee'

const initialState: EmployeeSchema = {
  allEmployees: [],
  currentEmployees: [],
  selectedEmployeeIds: [],
  isLoading: false
}

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setCurrentEmployees: (state, action: PayloadAction<string[]>) => {
      const currentEmployees = action.payload.map(companyId => state.allEmployees.filter(employee => employee.companyId === companyId)
      ).flat()
      state.currentEmployees = currentEmployees
    },
    setSelectedEmployeeIds: (state, action: PayloadAction<string[]>) => {
      state.selectedEmployeeIds = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.allEmployees = action.payload
        }
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
      .addCase(postEmployee.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(postEmployee.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.allEmployees = [...state.allEmployees, action.payload]
          state.currentEmployees = [...state.currentEmployees, action.payload]
        }
      })
      .addCase(postEmployee.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
      .addCase(deleteEmployees.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(deleteEmployees.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(deleteEmployees.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
      .addCase(editEmployee.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(editEmployee.fulfilled, (state, action) => {
        state.isLoading = false
        const indexAllEmployee = state.allEmployees.findIndex(employee => employee[EmployeeField.Id] === action.payload[EmployeeField.Id])
        const indexCurrentEmployee = state.currentEmployees.findIndex(employee => employee[EmployeeField.Id] === action.payload[EmployeeField.Id])
        const newAllEmployee = [...state.allEmployees]
        const currenAllEmployee = [...state.currentEmployees]
        newAllEmployee.splice(indexAllEmployee, 1, action.payload)
        currenAllEmployee.splice(indexCurrentEmployee, 1, action.payload)
        state.allEmployees = newAllEmployee
        state.currentEmployees = currenAllEmployee
      })
      .addCase(editEmployee.rejected, (state, action) => {
        state.isLoading = false
        if (action.payload !== undefined) {
          state.error = action.payload
        }
      })
  }
})

export const { setCurrentEmployees, setSelectedEmployeeIds } = employeeSlice.actions
export const { reducer: employeeReducer } = employeeSlice
