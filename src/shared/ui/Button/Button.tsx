import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.PRIMARY, size = ButtonSize.M, disabled = false, ...otherProps } = props

  return (
      <button
      className={classNames(
        styles.button,
        [className, styles[size], styles[theme]],
        { [styles.disabled]: disabled }
      )}
      disabled={disabled}
      {...otherProps}
    >
          {children}
      </button>
  )
}
