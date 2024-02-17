import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ErrorText.module.scss'

interface ErrorProps {
  className?: string
  error: string
}

export const ErrorText = ({ className, error }: ErrorProps): JSX.Element => {
  return (
      <p className={classNames(styles.error, [className])}>
          {error}
      </p>
  )
}
