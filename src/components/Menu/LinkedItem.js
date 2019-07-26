import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LinkedItem = styled(Link)`
    font-size: 90%;
    color: #666;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;
    letter-spacing: 1px;
    transition: color 250ms, letter-spacing 250ms;
    &:hover, &:focus {
        color: var(--color-accent);
        letter-spacing: 1.5px;
    }
    &.active {
        color: var(--color-accent);
    }
`

LinkedItem.propTypes = {
    children: PropTypes.node.isRequired,
}
