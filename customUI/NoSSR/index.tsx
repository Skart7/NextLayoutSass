import React from 'react'

interface NoSSRProps {
    children: React.ReactNode,
    fallback?: React.ReactNode,
    defer?: boolean
}

export function NoSsr ({children, fallback = null, defer = false}:NoSSRProps) {

    const [mount, setMount] = React.useState(false)

    React.useEffect(() => {
        if(!defer) {
            setMount(true)
        }
    }, [defer])

    return <>{mount ? children : fallback}</>
}