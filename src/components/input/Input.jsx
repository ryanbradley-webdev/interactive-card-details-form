import { useState } from 'react'

export default function Input({
    state,
    state2,
    updateState,
    updateState2,
    name,
    name2,
    placeholder,
    placeholder2
}) {
    const [invalid, setInvalid] = useState(false)
    const [doubleInvalid, setDoubleInvalid] = useState(false)

    const handleChange = (e) => {
        setInvalid(e.target.value === '')

        updateState(e)
    }

    const handleDoubleChange = (e) => {
        setDoubleInvalid(e.target.value === '')

        updateState2(e)
    }

    return (
        <>
        
            <input
                type='text'
                name={name2 ? 'expiration' : name}
                id={name}
                placeholder={placeholder}
                value={state}
                onChange={handleChange}
                required
                aria-invalid={invalid}
            />

            {state2 !== undefined && (
                <input
                    type='text'
                    name='expiration'
                    id={name2}
                    placeholder={placeholder2}
                    value={state2}
                    onChange={handleDoubleChange}
                    required
                    aria-invalid={doubleInvalid}
                />
            )}
            
            {(invalid || doubleInvalid) && (
                <p>
                    Can&apos;t be blank
                </p>
            )}
        
        </>
    )
}