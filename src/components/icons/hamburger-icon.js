import React from 'react'

export const HamburgerIcon = ({ size = 24, fill = '#000', ...props }) => (
    <svg { ...props } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={ fill } />
    </svg>
)


