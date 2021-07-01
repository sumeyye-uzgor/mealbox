import React, { useEffect } from 'react'

import { useHistory, Redirect } from 'react-router-dom'

function PreventAccess({ children }) {
    const history = useHistory()

    // console.log(history)
    useEffect(() => {
        if (history.action === 'POP') {
            history.push('/')
        }
    })
    return (
        <>
            {children}
        </>
    )
}

export default PreventAccess