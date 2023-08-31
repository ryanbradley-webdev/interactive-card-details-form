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
    const [errMsg, setErrMsg] = useState('')

    const handleChange = (e) => {
        if (!e.target.value) {
            setInvalid(true)
            setErrMsg('Can\'t be blank')
        } else {
            if (name !== 'name') {
                if (e.target.value.match(/[^0-9]/)) {
                    setInvalid(true)
                    setErrMsg('Wrong format, numbers only')
                } else {
                    setInvalid(false)
                    if (!doubleInvalid) setErrMsg('')
                }
            } else {
                setInvalid(false)
                if (!doubleInvalid) setErrMsg('')
            }
        }

        updateState(e)
    }

    const handleDoubleChange = (e) => {
        if (!e.target.value) {
            setDoubleInvalid(true)
            setErrMsg('Can\'t be blank')
        } else {
            if (e.target.value.match(/[^0-9]/)) {
                setDoubleInvalid(true)
                setErrMsg('Wrong format, numbers only')
            } else {
                setDoubleInvalid(false)
                if (!invalid) setErrMsg('')
            }
        }

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
                    {errMsg}
                </p>
            )}
        
        </>
    )
}