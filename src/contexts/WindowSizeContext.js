import React, { useState } from 'react'
import { useWindowWidth } from '../hooks'

export const WindowSizeContext = React.createContext({})

const COMPACT_THRESHOLD = 900

export const WindowSizeProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useWindowWidth()
    const isCompact = () => windowWidth < COMPACT_THRESHOLD
    const [compact, setCompact] = useState(isCompact())

    return (
        <WindowSizeProvider value={{ compact }}>
            { children }
        </WindowSizeProvider>
    )
}

