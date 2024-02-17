import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { useEffect, type MouseEvent, type ReactNode, useCallback, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const Modal = ({ className, children, isOpen, onClose, lazy = false }: ModalProps): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const closeHandler = useCallback((): void => {
    onClose()
  }, [onClose])

  const onContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: globalThis.KeyboardEvent): void => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) { window.addEventListener('keydown', onKeyDown) }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(styles.modal, [className], {
            [styles.opened]: isOpen
          })}
          >
              <div className={styles.overlay} onClick={closeHandler}>
                  <div className={styles.content} onClick={onContentClick}>
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}
