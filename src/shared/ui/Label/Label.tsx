import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Label.module.scss'
import { type LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
  label: string
  required?: boolean
}

export const Label = (props: LabelProps): JSX.Element => {
  const { className, label, required = false, ...otherProps } = props

  return (
      <label className={classNames(styles.label, [className])} {...otherProps}>
          {label}
          {required && <span aria-label="Обязательное поле" className={styles.required}> *</span>}
      </label>
  )
}
