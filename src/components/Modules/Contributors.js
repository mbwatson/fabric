import React from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'
import { List, ListItem, ListTitle } from '../List'
import { Module } from '../Layout'
import { contributors } from '../../data'
import { Subheading } from '../Typography'

const GroupList = styled.div`
    display: flex;
    flex: 1;
    margin-left: ${ props => props.compact ? '20%' : '0' };
`

const GroupName = styled(Subheading)`
    border-left: 1px solid;
    border-image: linear-gradient(to top, var(--color-primary), transparent 95%) 1 100%;
    font-weight: bold;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: right;
    background: -webkit-linear-gradient(var(--color-grey) 70%, var(--color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const ContributorsModule = props => {
    const { isCompact } = useWindowWidth()
    return (
        <Module title="FABRIC Contributors">
            <div style={{ display: 'flex', flexDirection: isCompact ? 'column' : 'row' }}>
                {
                    contributors.map(({ name, members }) => (
                        <GroupList compact={ isCompact } key={ name }>
                            <GroupName>{ name }</GroupName>
                            <List>
                                { members.map(member => (
                                    <ListItem key={ member.name } primary={ member.name } secondary={ member.organization } />
                                )) }
                            </List>
                        </GroupList>
                    ))
                }
            </div>
        </Module>
    )
}
