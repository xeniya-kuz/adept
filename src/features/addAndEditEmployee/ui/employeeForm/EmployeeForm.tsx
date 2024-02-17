import { classNames } from 'shared/lib/classNames/classNames'
import styles from './EmployeeForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Heading, HeadingType } from 'shared/ui/Heading/Heading'
import { Button } from 'shared/ui/Button/Button'
import { type ChangeEvent, useState, type FormEvent, useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { Label } from 'shared/ui/Label/Label'
import { type SelectOption, Select } from 'shared/ui/Select/Select'
import { type Employee, EmployeeField, EmployeePosition, postEmployee, editEmployee, selectErrorEmployee, selectIsLoadingEmployee } from 'entities/Employee'
import { selectSelectedCompanyIds, selectCompanies, CompanyField } from 'entities/Company'
import { Form } from 'shared/ui/Form/Form'
import { selectCurrentEmployees } from 'entities/Employee/model/selectors/selectCurrentEmployees'
import { Loader } from 'shared/ui/Loader/Loader'

export interface EmployeeFormProps {
  className?: string
  onClose: () => void
  idToEdit?: string
}

const positionOptions: SelectOption[] = Object.entries(EmployeePosition).map(([key, value]) => ({ title: value, value }))

const EmployeeForm = ({ className, onClose, idToEdit }: EmployeeFormProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectedCompanyIds = useAppSelector(selectSelectedCompanyIds)
  const isLoading = useAppSelector(selectIsLoadingEmployee)
  const employee = useAppSelector(selectCurrentEmployees)?.find(employee => employee[EmployeeField.Id] === idToEdit)

  const allCompanies = useAppSelector(selectCompanies)
  const companyOptions: SelectOption[] = useMemo(() =>
    allCompanies.filter(company => selectedCompanyIds.includes(company[CompanyField.Id] ?? ''))
      .map((company) => ({ title: company[CompanyField.Title], value: company[CompanyField.Id] ?? '' })),
  [selectedCompanyIds, allCompanies])

  const initialEmployee: Employee = {
    [EmployeeField.CompanyId]: '',
    [EmployeeField.FirstName]: '',
    [EmployeeField.LastName]: '',
    [EmployeeField.Position]: ''
  }
  const [newEmployee, setNewEmployee] = useState<Employee>(employee ?? initialEmployee)

  const onTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewEmployee(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const onAddEmployee = useCallback(() => {
    // @ts-expect-error - не смогла решить проблему типов
    dispatch(postEmployee(newEmployee))
    onClose()
  }, [dispatch, newEmployee, onClose])

  const onEditEmployee = useCallback(() => {
    // @ts-expect-error - не смогла решить проблему типов
    dispatch(editEmployee(newEmployee))
    onClose()
  }, [dispatch, newEmployee, onClose])

  const onOptionSelect = useCallback((option: SelectOption, name: string) => {
    setNewEmployee(prev => ({ ...prev, [name]: option.value }))
  }, [])

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (idToEdit === undefined) {
      onAddEmployee()
    } else {
      onEditEmployee()
    }
  }, [idToEdit, onAddEmployee, onEditEmployee])

  return (
      <Form className={classNames(styles.form, [className])} onSubmit={onSubmitHandler}>
          <Heading
            title={`${idToEdit === undefined ? 'Добавить' : 'Редактировать'} сотрудника`}
            as={HeadingType.H2}
            className={styles.heading}
          />

          {isLoading === true
            ? <Loader/>
            : <>
                <div>
                    <Label label='Фамилия' htmlFor={EmployeeField.LastName} required/>
                    <Input
                id={EmployeeField.LastName}
                autofocus
                placeholder='Введите фамилию'
                className={styles.input}
                required
                name={EmployeeField.LastName}
                onChange={onTextChange}
                value={newEmployee[EmployeeField.LastName]}
              />
                </div>

                <div>
                    <Label label='Имя' htmlFor={EmployeeField.FirstName} required/>
                    <Input
                id={EmployeeField.FirstName}
                placeholder='Введите имя'
                className={styles.input}
                required
                name={EmployeeField.FirstName}
                onChange={onTextChange}
                value={newEmployee[EmployeeField.FirstName]}
                />
                </div>

                <div>
                    <Label label='Должность' htmlFor={EmployeeField.LastName} required/>
                    <Select
                options={positionOptions}
                onChange={onOptionSelect}
                name={EmployeeField.Position}
              />
                </div>

                <div>
                    <Label label='Компания' htmlFor={EmployeeField.LastName} required/>
                    <Select
                options={companyOptions}
                onChange={onOptionSelect}
                name={EmployeeField.CompanyId}
              />
                </div>

                <Button
            type='submit'
            className={styles.btn}
          >
                    {idToEdit === undefined ? 'Добавить' : 'Сохранить'}
                </Button>
            </>}

      </Form>
  )
}

export default EmployeeForm
