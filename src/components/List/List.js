import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const UnorderedList = styled.ul`
    list-style-type: none;
    margin: 0 0 2rem 0;
    padding: 0;
`

export const ListTitle = styled.h4`
    color: var(--color-primary);
`

export const ListItemContainer = styled.li`
    margin: 0 0 0.5rem 1rem;
    padding: 0;
`

const PrimaryText = styled.span`
    font-weight: bold;
    display: block;
    line-height: 1.25;
    color: var(--color-dark);
`

const SecondaryText = styled.span`
    display: block;
    line-height: 1.25;
    color: var(--color-grey);
`

const TertiaryText = styled.span`
    display: block;
    line-height: 1;
    color: var(--color-grey);
`

export const ListItem = ({ primary, secondary, tertiary }) => {
    return (
        <ListItemContainer>
            <PrimaryText>{ primary }</PrimaryText>
            <SecondaryText>{ secondary }</SecondaryText>
            <TertiaryText>{ tertiary }</TertiaryText>
        </ListItemContainer>
    )
}

ListItem.propTypes = {
    primary: PropTypes.node.isRequired,
    secondary: PropTypes.node,
    tertiary: PropTypes.node,
}

export const List = ({ children }) => {
    return (
        <UnorderedList>
            { children }
        </UnorderedList>
    )
}

List.propTypes = {
    children: PropTypes.node.isRequired,
}