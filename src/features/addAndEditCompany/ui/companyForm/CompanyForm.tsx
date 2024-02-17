import { classNames } from 'shared/lib/classNames/classNames'
import styles from './CompanyForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Heading, HeadingType } from 'shared/ui/Heading/Heading'
import { Button } from 'shared/ui/Button/Button'
import { CompanyField, type Company } from 'entities/Company/model/types/company'
import { type ChangeEvent, useState, type FormEvent, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { editCompany, postCompany, selectCompanies, selectErrorCompany, selectIsLoadingCompany } from 'entities/Company'
import { Label } from 'shared/ui/Label/Label'
import { Form } from 'shared/ui/Form/Form'
import { Loader } from 'shared/ui/Loader/Loader'

export interface CompanyFormProps {
  className?: string
  onClose: () => void
  idToEdit?: string
}

const CompanyForm = ({ className, onClose, idToEdit }: CompanyFormProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const company = useAppSelector(selectCompanies).find(company => company[CompanyField.Id] === idToEdit)
  const isLoading = useAppSelector(selectIsLoadingCompany)

  const initialCompany: Company = {
    [CompanyField.Title]: '',
    [CompanyField.Address]: '',
    [CompanyField.EmployeeCount]: 0
  }
  const [newCompany, setNewCompany] = useState<Company>(company ?? initialCompany)

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCompany(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onAddCompany = useCallback(() => {
    // @ts-expect-error - не смогла решить проблему типов
    dispatch(postCompany(newCompany))
    onClose()
  }, [dispatch, newCompany, onClose])

  const onEditCompany = useCallback(() => {
    // @ts-expect-error - не смогла решить проблему типов
    dispatch(editCompany(newCompany))
    onClose()
  }, [dispatch, newCompany, onClose])

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (idToEdit === undefined) {
      onAddCompany()
    } else {
      onEditCompany()
    }
  }, [idToEdit, onAddCompany, onEditCompany])

  return (
      <Form className={classNames(styles.form, [className])} onSubmit={onSubmitHandler}>
          <Heading
            title={`${idToEdit === undefined ? 'Добавить' : 'Редактировать'} компанию`}
            as={HeadingType.H2}
            className={styles.heading}
          />

          {isLoading
            ? <Loader/>
            : <>
                <div>
                    <Label label='Название' htmlFor={CompanyField.Title} required/>
                    <Input
              autofocus
              id={CompanyField.Title}
              placeholder='Введите название'
              className={styles.input}
              required
              name={CompanyField.Title}
              onChange={onTextChange}
              value={newCompany[CompanyField.Title]}
            />
                </div>

                <div>
                    <Label label='Адрес' htmlFor={CompanyField.Address} required/>
                    <Input
                id={CompanyField.Address}
                placeholder='Введите адрес'
                className={styles.input}
                required
                name={CompanyField.Address}
                onChange={onTextChange}
                value={newCompany[CompanyField.Address]}
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

export default CompanyForm
