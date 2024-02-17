import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { employeeReducer, setCurrentEmployees, setSelectedEmployeeIds } from '../model/slice/employeeSlice'
import { Table, TableTheme, Header } from 'shared/ui/Table'
import { headTitles } from '../model/constants/constants'
import { selectCurrentEmployees } from '../model/selectors/selectCurrentEmployees'
import { getEmployees } from '../model/service/getEmployees'
import { selectAllEmployees } from '../model/selectors/selectAllEmployees'
import { selectSelectedCompanyIds } from 'entities/Company'
import { selectSelectedEmployeeIds } from '../model/selectors/selectSelectedEmployeeIds'
import { deleteEmployees } from '../model/service/deleteEmployees'
import { AddEmployeeModal } from 'features/addAndEditEmployee'
import { selectErrorEmployee } from '../model/selectors/selectErrorEmployee'
import { ErrorModal } from 'shared/ui/Error'

interface EmployeesProps {
  className?: string
}

const initialReducer: ReducerList = {
  employees: employeeReducer
}

const Employees = ({ className }: EmployeesProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const currentEmployees = useAppSelector(selectCurrentEmployees)
  const allEmployees = useAppSelector(selectAllEmployees)
  const selectedCompanyIds = useAppSelector(selectSelectedCompanyIds)
  const selectedEmployeeIds = useAppSelector(selectSelectedEmployeeIds)
  const error = useAppSelector(selectErrorEmployee)

  const tableData = useMemo(() => currentEmployees?.map(({ id, firstName, lastName, position }) => ({ id, lastName, firstName, position })), [currentEmployees])

  const [selected, setSelected] = useState<string[]>([])
  const [isAddModal, setIsAddModal] = useState(false)
  const [employeeIdToEdit, setEmployeeIdToEdit] = useState<string>()

  useEffect(() => {
    if (allEmployees === undefined) {
      // @ts-expect-error - не смогла решить проблему типов
      dispatch(getEmployees())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  useEffect(() => {
    if (allEmployees !== undefined && allEmployees.length > 0) {
      dispatch(setCurrentEmployees(selectedCompanyIds))
    }
  }, [selectedCompanyIds, dispatch, allEmployees])

  const onSelectEmployee = useCallback((selected: string[]) => {
    setSelected(selected)
    dispatch(setSelectedEmployeeIds(selected))
  }, [dispatch])

  const onOpenAddModal = useCallback(() => {
    setIsAddModal(true)
    setEmployeeIdToEdit(undefined)
  }, [])

  const onOpenEditModal = useCallback((employeeId?: string) => {
    setIsAddModal(true)
    setEmployeeIdToEdit(employeeId ?? undefined)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAddModal(false)
  }, [])

  const onDelete = useCallback(() => {
    // @ts-expect-error - не смогла решить проблему типов
    dispatch(deleteEmployees(selectedEmployeeIds))
  }, [dispatch, selectedEmployeeIds])

  return (
      <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
          <div className={classNames(className)}>
              <Header
                title='Сотрудники'
                theme={TableTheme.INVERTED}
                onAdd={onOpenAddModal}
                onDelete={onDelete}
                disableDeleteBtn={selectedEmployeeIds?.length === 0}
              />
              <Table
                headTitles={headTitles}
                tableData={tableData ?? []}
                theme={TableTheme.INVERTED}
                selected={selected} onSelect={onSelectEmployee}
                onEdit={onOpenEditModal}
              />
              {isAddModal &&
              <AddEmployeeModal
                isOpen={isAddModal}
                onClose={onCloseModal}
                idToEdit={employeeIdToEdit}
              />}
              {error !== undefined && <ErrorModal error={error}/>}
          </div>
      </DynamicModuleLoader>
  )
}

export default Employees
