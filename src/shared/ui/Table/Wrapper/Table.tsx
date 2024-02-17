import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Table.module.scss'
import { Row } from '../Row/Row'
import { Head } from '../Head/Head'
import { type ChangeEvent, useCallback } from 'react'

export type TableDataValue = string | number | null | undefined
export interface TableData extends Record<string, TableDataValue > {
  id?: string
}

export enum TableTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface TableProps {
  className?: string
  headTitles: string[]
  tableData: TableData[]
  theme?: TableTheme
  selected: string[]
  onSelect: (selected: string[]) => void
  onEdit?: (id?: string) => void
}

/**
 * @remarks
 * headTitles - заголовоки в том порядке, в котором они должны отобразиться
 *
 * tableData должен содержать только те с-ва, которые будут отбражены в таблице и с в соответствующем порядке
 *
 */

export const Table = (props: TableProps): JSX.Element => {
  const { className, headTitles, tableData, theme = TableTheme.PRIMARY, selected, onSelect, onEdit } = props

  const onCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>, value: TableDataValue) => {
    if (value !== undefined && value !== null) {
      const newValue = typeof value === 'string' ? value : value.toString()

      if (e.target.checked) {
        onSelect([...selected, newValue])
      } else {
        const indexToDelete = selected.findIndex(item => item === newValue)

        if (indexToDelete !== -1) {
          const newSelected = [...selected]
          newSelected.splice(indexToDelete, 1)
          onSelect(newSelected)
        }
      }
    }
  }, [selected, onSelect])

  const onSelectAll = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = tableData.map(row => row.id ?? '')
      onSelect(allIds)
    } else {
      onSelect([])
    }
  }, [tableData, onSelect])

  return (
      <table className={classNames(styles.table, [styles[theme], className])}>
          <Head
            titles={headTitles}
            className={styles.header}
            selectAll={onSelectAll}
            checked={selected.length > 0 && selected.length === tableData.length}
          />
          <tbody>
              {tableData.map((row, index) => (
                  <Row key={row.id ?? index}
                    row={row}
                    onCheckboxChange={onCheckboxChange}
                    className={classNames(undefined, [], { [styles.selected]: selected.includes(row.id ?? '') })}
                    checked={selected.includes(row.id ?? '')}
                    onEdit={onEdit}
                  />
              ))}
          </tbody>
      </table>
  )
}
