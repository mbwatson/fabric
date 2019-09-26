import React from 'react'
import PropTypes from 'prop-types'

export const ExpandUpIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={ color }>
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
)

export const ExpandRightIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={ color }>
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        <path fill="none" d="M0 0h24v24H0V0z"/>
    </svg>
)

export const ExpandDownIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={ color }>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
)

const requiredProps = {
    color: PropTypes.string.isRequired,
}

const defaultProps = {
    color: '#ffffff',
}

ExpandUpIcon.propTypes = requiredProps
ExpandRightIcon.propTypes = requiredProps
ExpandDownIcon.propTypes = requiredProps

ExpandUpIcon.defaultProps = defaultProps
ExpandRightIcon.defaultProps = defaultProps
ExpandDownIcon.defaultProps = defaultProps
