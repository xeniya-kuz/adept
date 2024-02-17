import { classNames } from 'shared/lib/classNames/classNames'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getCompanies } from '../model/service/getCompanies'
import { Header, Table } from 'shared/ui/Table'
import { headTitles } from '../model/constants/constants'
import { selectCompanies } from '../model/selectors/selectCompanies'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { setSelectedCompanyIds } from '../model/slice/companySlice'
import { selectSelectedCompanyIds } from '../model/selectors/selectSelectedCompanyIds'
import { deleteCompanies } from '../model/service/deleteCompanies'
import { AddCompanyModal } from 'features/addAndEditCompany'
import { CompanyField } from '../model/types/company'
import { selectErrorCompany } from '../model/selectors/selectErrorCompany'
import { ErrorModal } from 'shared/ui/Error'

interface CompaniesProps {
  className?: string
}

export const Companies = ({ className }: CompaniesProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const companies = useAppSelector(selectCompanies)
  const selectedCompanyIds = useAppSelector(selectSelectedCompanyIds)
  const error = useAppSelector(selectErrorCompany)
  const tableData = useMemo(() => companies?.map(({ [CompanyField.Id]: id, [CompanyField.Title]: title, [CompanyField.EmployeeCount]: count, [CompanyField.Address]: address }) => ({ id, title, count, address })), [companies])

  const [selected, setSelected] = useState<string[]>([])
  const [isAddModal, setIsAddModal] = useState(false)
  const [companyIdToEdit, setCompanyIdToEdit] = useState<string>()

  useEffect(() => {
    // @ts-expect-error - не смогла решить проблему типов
    dispatch(getCompanies())
  }, [dispatch])

  const onSelectCompany = useCallback((selected: string[]) => {
    setSelected(selected)
    dispatch(setSelectedCompanyIds(selected))
  }, [dispatch])

  const onOpenAddModal = useCallback(() => {
    setIsAddModal(true)
    setCompanyIdToEdit(undefined)
  }, [])

  const onOpenEditModal = useCallback((companyId?: string) => {
    setIsAddModal(true)
    setCompanyIdToEdit(companyId ?? undefined)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAddModal(false)
  }, [])

  const onDelete = useCallback(() => {
    // @ts-expect-error - не смогла решить проблему типов
    dispatch(deleteCompanies(selectedCompanyIds))
  }, [dispatch, selectedCompanyIds])

  return (
      <section className={classNames(className)}>
          <Header
            title='Компании'
            onAdd={onOpenAddModal}
              onDelete={onDelete}
              disableDeleteBtn={selectedCompanyIds.length === 0}
          />
          <Table
            headTitles={headTitles}
            tableData={tableData}
            selected={selected}
            onSelect={onSelectCompany}
            onEdit={onOpenEditModal}
          />
          {isAddModal &&
          <AddCompanyModal
            isOpen={isAddModal}
            onClose={onCloseModal}
            idToEdit={companyIdToEdit}
          />}

          {error !== undefined && <ErrorModal error={error}/>}
      </section>

  )
}
