import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Header.module.scss'
import { Heading, HeadingType } from 'shared/ui/Heading/Heading'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { TableTheme } from '../Wrapper/Table'

interface HeaderProps {
  className?: string
  title: string
  theme?: TableTheme
  onAdd: () => void
  onDelete: () => void
  disableDeleteBtn?: boolean
}

/**
 * @remarks
 * Компонент над таблицей, но одинаковый для сотрудников и компаний
 *
 */

export const Header = (props: HeaderProps): JSX.Element => {
  const { className, title, theme = TableTheme.PRIMARY, onAdd, onDelete, disableDeleteBtn = false } = props

  return (
      <div className={classNames(styles.headingWrapper, [className, styles[theme]])}>
          <Heading title={title} as={HeadingType.H2} className={classNames(styles.heading, [styles[theme]])}/>
          <div className={styles.btnWrapper}>
              <Button
                theme={theme === TableTheme.PRIMARY
                  ? ButtonTheme.PRIMARY
                  : ButtonTheme.INVERTED}
                  onClick={onAdd}
              >
                  Добавить
              </Button>
              <Button
                theme={theme === TableTheme.PRIMARY
                  ? ButtonTheme.PRIMARY
                  : ButtonTheme.INVERTED}
                  onClick={onDelete}
                  disabled={disableDeleteBtn}
              >
                  Удалить
              </Button>
          </div>
      </div>

  )
}
