import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Select.module.scss'
import input from 'shared/ui/Input/Input.module.scss'
import { type ChangeEvent, useState, useEffect } from 'react'
import IconArrow from 'shared/assets/icons/arrow.svg'

export interface SelectOption { title: string, value: string }

interface SelectProps {
  className?: string
  options: SelectOption[]
  onChange?: (option: SelectOption, name?: string) => void
  name?: string
}

export const Select = ({ className, options, onChange, name }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption>(options[0])

  useEffect(() => {
    onChange?.(selectedOption, name)
  }, [onChange, selectedOption, name])

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const option: SelectOption = { title: e.currentTarget.name, value: e.currentTarget.value }
    setSelectedOption(option)
  }

  return (
      <div className={classNames(styles.select, [input.input, className])}>
          <div className={styles.current} tabIndex={1}>
              {options.map(({ title, value }, index) =>
                  <div className={styles.value} key={index}>
                      <input
                        className={styles.input}
                        type="radio"
                        id={value}
                        value={value}
                        name={title}
                        onChange={onSelect}
                        checked={selectedOption.value === value}
                      />
                      <label
                        className={styles.currentText}>
                          {title}
                      </label>
                  </div>
              )}
              <IconArrow aria-hidden="true" className={styles.icon} />
          </div>
          <ul className={styles.list}>
              {options.map(({ title, value }, index) =>
                  <li key={index} className={styles.option}>
                      <label
                        htmlFor={value}
                        className={styles.optionText}
                        aria-hidden={value !== selectedOption.value}
                       >
                          {title}
                      </label>
                  </li>
              )}
          </ul>
      </div>

  )
}
