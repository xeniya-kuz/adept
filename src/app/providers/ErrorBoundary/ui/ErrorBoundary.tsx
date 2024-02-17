import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  message: string
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.error(error, info.componentStack)
  }

  render (): React.ReactNode {
    const { hasError } = this.state
    const { children, fallback } = this.props
    if (hasError) {
      return (
          <Suspense fallback=''>
              {fallback}
          </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
