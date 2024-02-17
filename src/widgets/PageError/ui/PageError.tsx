import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
  const reloadPage = (): void => {
    location.reload()
  }

  return (
      <div className={classNames(styles.pageError, [className])}>
          <p>Произошла непредвиденная ошибка</p>
          <button onClick={reloadPage}>Обновить страницу</button>
      </div>
  )
}
