import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { CompanyFormAsync } from '../companyForm/companyForm.async'

interface CompanyModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  idToEdit?: string
}

export const CompanyModal = ({ className, isOpen, onClose, idToEdit }: CompanyModalProps): JSX.Element => {
  return (
      <Modal
        className={classNames(undefined, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
      >
          <Suspense fallback={<Loader/>}>
              <CompanyFormAsync onClose={onClose} idToEdit={idToEdit}/>
          </Suspense>
      </Modal>
  )
}
