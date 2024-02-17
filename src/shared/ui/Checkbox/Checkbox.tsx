import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Checkbox.module.scss'
import { type InputHTMLAttributes } from 'react'
import { Label } from '../Label/Label'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' >

export enum CheckboxSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface CheckboxProps extends HTMLInputProps {
  className?: string
  inputClassname?: string
  labelClassname?: string
  label?: string
  size?: CheckboxSize
}

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { className, label, inputClassname, labelClassname, size = CheckboxSize.M, ...otheProps } = props

  return (
      <div className={classNames(styles.checkbox, [className, styles[size]])}>
          <input
            id={`checkbox-${label}`}
            type='checkbox'
            className={classNames(styles.input, [inputClassname])}
            {...otheProps}
          />
          {(label !== undefined) &&
          <Label
            htmlFor={`checkbox-${label}`}
            className={classNames(styles.label, [labelClassname])} label={label}/>
          }
      </div>
  )
}
