import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Head.module.scss'
import { Checkbox } from 'shared/ui/Checkbox/Checkbox'
import { type ChangeEvent } from 'react'

interface HeadProps {
  className?: string
  titles: string[]
  selectAll: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

/**
 * @remarks
 * Шапка таблицы
 */

export const Head = ({ className, titles, selectAll, checked }: HeadProps): JSX.Element => {
  return (
      <thead className={classNames(styles.head, [className])}>
          <tr>
              <th title='Выделить всё'><Checkbox onChange={selectAll} checked={checked}/></th>
              {titles.map((title, index) => (
                  <th key={index}>
                      {title}
                  </th>
              ))}
          </tr>
      </thead>

  )
}
