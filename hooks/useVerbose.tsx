import { useState } from 'react'

export const useVerbose = () => {
    const [isChecked, setIsChecked] = useState(false)
    const handleToggle = () => {
        setIsChecked(!isChecked)
    }
    return [isChecked, handleToggle]
}
