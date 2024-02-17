import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { EmployeeFormAsync } from '../employeeForm/EmployeeForm.async'

interface EmployeeModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  idToEdit?: string
}

export const EmployeeModal = ({ className, isOpen, onClose, idToEdit }: EmployeeModalProps): JSX.Element => {
  return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
      >
          <Suspense fallback={<Loader/>}>
              <EmployeeFormAsync onClose={onClose} idToEdit={idToEdit} className={className}/>
          </Suspense>
      </Modal>
  )
}
