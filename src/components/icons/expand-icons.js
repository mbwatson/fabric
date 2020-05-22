import React from 'react'
import PropTypes from 'prop-types'

export const ExpandUpIcon = ({ size = 24, fill = '#000', ...props }) => (
    <svg { ...props } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill={ fill } />
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
)

export const ExpandDownIcon = ({ size = 24, fill = '#000', ...props }) => (
    <svg { ...props } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={ fill } />
    </svg>
)

const requiredProps = {
    fill: PropTypes.string.isRequired,
}

const defaultProps = {
    fill: '#ffffff',
}

ExpandUpIcon.propTypes = requiredProps
ExpandDownIcon.propTypes = requiredProps

ExpandUpIcon.defaultProps = defaultProps
ExpandDownIcon.defaultProps = defaultProps
