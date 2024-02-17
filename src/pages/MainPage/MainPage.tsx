import { classNames } from 'shared/lib/classNames/classNames'
import styles from './MainPage.module.scss'
import { Companies, selectSelectedCompanyIds } from 'entities/Company'
import { EmployeesAsync } from 'entities/Employee'
import { useAppSelector } from 'app/providers/StoreProvider'

interface MainPageProps {
  className?: string
}

export const MainPage = ({ className }: MainPageProps): JSX.Element => {
  const selectedCompanyId = useAppSelector(selectSelectedCompanyIds)

  return (
      <main className={classNames(styles.mainPage, [className])}>
          <Companies/>
          {(selectedCompanyId.length > 0) &&
          <EmployeesAsync/>
           }
      </main>
  )
}
