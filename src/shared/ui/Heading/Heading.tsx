import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Heading.module.scss'

export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
}

interface HeadingProps {
  className?: string
  title: string
  as: HeadingType
}

export const Heading = ({ className, title, as }: HeadingProps): JSX.Element => {
  switch (as) {
    case HeadingType.H1:
      return (
          <h1 className={classNames(styles[as], [className])}>
              {title}
          </h1>
      )
    case HeadingType.H2:
      return (
          <h2 className={classNames(styles[as], [className])}>
              {title}
          </h2>
      )
    default:
      return <p>Укажите заголовок</p>
  }
}
