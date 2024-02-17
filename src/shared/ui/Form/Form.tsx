import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Form.module.scss'
import { type FormEvent, type FormHTMLAttributes, type ReactNode } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string
  children: ReactNode
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const Form = (props: FormProps): JSX.Element => {
  const { className, children, onSubmit, ...otherProps } = props

  return (
      <form className={classNames(styles.form, [className])} onSubmit={onSubmit} {...otherProps }>
          {children}
      </form>
  )
}
