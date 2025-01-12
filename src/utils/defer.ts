export function defer<T = unknown>() {
  const deferred = { status: 'pending' } as {
    promise: Promise<any>
    status: 'pending' | 'resolved' | 'rejected'
    resolve: (value: T) => void
    reject: (reason?: any) => void
  }

  deferred.promise = new Promise<T>((resolve, reject) => {
    deferred.resolve = (value: T) => {
      deferred.status = 'resolved'
      return resolve(value)
    }

    deferred.reject = (error) => {
      deferred.status = 'rejected'
      return reject(error)
    }
  })

  return deferred
}
