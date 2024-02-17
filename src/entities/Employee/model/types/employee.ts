export enum EmployeePosition {
  SEO = 'Директор',
  ACCOUNTANT = 'Бухгалтер',
  DEVELOPER = 'Разработчик',
  MANAGER = 'Менеджер',
  QA = 'Тестировщик',
  DESIGNER = 'Дизайнер'
}

export enum EmployeeField {
  Id = 'id',
  CompanyId = 'companyId',
  FirstName = 'firstName',
  LastName = 'lastName',
  Position = 'position'
}

export interface Employee {
  [EmployeeField.Id]?: string
  [EmployeeField.CompanyId]: string
  [EmployeeField.FirstName]: string
  [EmployeeField.LastName]: string
  [EmployeeField.Position]: EmployeePosition | ''
}

export interface EmployeeSchema {
  allEmployees: Employee[]
  currentEmployees: Employee[]
  selectedEmployeeIds: string[]
  error?: string
  isLoading: boolean
}
