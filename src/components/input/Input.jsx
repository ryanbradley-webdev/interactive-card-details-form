import { useState } from 'react'

export default function Input({
    state,
    updateState,
    type,
    name,
    placeholder
}) {
    const [invalid, setInvalid] = useState(false)

    const handleChange = (e) => {
        setInvalid(e.target.value === '')

        updateState(e)
    }

    return (
        <>
        
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={state}
                onChange={handleChange}
                required
                aria-invalid={invalid}
            />
            
            {invalid && (
                <p>
                    Can&apos;t be blank
                </p>
            )}
        
        </>
    )
}