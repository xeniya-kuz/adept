export enum CompanyField {
  Id = 'id',
  Title = 'title',
  Address = 'address',
  EmployeeCount = 'employeeCount',
}

export interface Company {
  [CompanyField.Id]?: string
  [CompanyField.Title]: string
  [CompanyField.Address]: string
  [CompanyField.EmployeeCount]: number
}

export interface CompanySchema {
  companies: Company[]
  selectedCompanyIds: string[]
  error?: string
  isLoading: boolean
}
