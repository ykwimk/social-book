import React, { useCallback, useState } from 'react';

export const useInput = (initialValue = null) => {
  const [ value, setValue ] = useState(initialValue)

  const handlerValue = useCallback((e) => {
    const { value } = e.target
    setValue(value)
  }, [])

  return [ value, handlerValue ]
}