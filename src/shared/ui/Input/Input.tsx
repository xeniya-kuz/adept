import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import { memo, type InputHTMLAttributes, useEffect, useRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  autofocus?: boolean
}

export const Input = memo(
  function Input (props: InputProps): JSX.Element {
    const { className, type = 'text', autofocus = false, ...otherProps } = props
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (autofocus) {
        ref?.current?.focus()
      }
    }, [autofocus])

    return (
        <div className={classNames(styles.inputWrapper, [className])} >
            <input
                  ref={ref}
                  type={type}
                  className={styles.input}
                  {...otherProps}/>

        </div>
    )
  })
