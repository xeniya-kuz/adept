import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ErrorModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Heading, HeadingType } from 'shared/ui/Heading/Heading'
import { useEffect, useState } from 'react'

interface ErrorModalProps {
  className?: string
  error: string
}

export const ErrorModal = ({ className, error }: ErrorModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
      <Modal
        isOpen={isOpen}
        onClose={() => { setIsOpen(false) }}
        lazy
      >
          <div className={classNames(styles.errorModal, [className])}>
              <Heading title='Ошибка' as={HeadingType.H2} className={styles.heading}/>
              <p>{error}</p>
          </div>
      </Modal>
  )
}
