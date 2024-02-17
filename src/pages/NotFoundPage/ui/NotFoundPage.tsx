import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
  return (
      <div className={classNames(styles.notFoundPage, [className])}>
          Страница не найдена
      </div>
  )
}
