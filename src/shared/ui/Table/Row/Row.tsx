import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Row.module.scss'
import { type TableDataValue, type TableData } from '../Wrapper/Table'
import { Checkbox } from 'shared/ui/Checkbox/Checkbox'
import { type MouseEvent, type ChangeEvent } from 'react'

interface RowProps {
  className?: string
  row: TableData
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>, value: TableDataValue) => void
  checked: boolean
  onEdit?: (id?: string) => void
}

export const Row = ({ className, row, onCheckboxChange, checked, onEdit }: RowProps): JSX.Element => {
  const stopPropagation = (e: MouseEvent<HTMLTableCellElement>) => {
    e.stopPropagation()
  }

  const onEditHandler = (e: MouseEvent<HTMLTableRowElement>) => {
    onEdit?.(row.id)
  }

  return (
      <tr className={classNames(styles.row, [className])} onClick={onEditHandler}>
          {Object.values(row).map((value, index) =>
            index === 0
              ? <td key={index} onClick={stopPropagation}>
                  <Checkbox
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { onCheckboxChange(e, value) } }
                  checked={checked}
                />
              </td>
              : <td key={index} className={styles.cell}>{value}</td>

          )}
      </tr>
  )
}
