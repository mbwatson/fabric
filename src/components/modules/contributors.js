import React from 'react'
import styled from 'styled-components'
import { List, ListItem } from '../list'
import { Module } from '../layout'
import { contributors } from '../../data'
import { Subheading } from '../typography'
import { Container as Grid, Row, Col } from 'react-grid-system'

const TeamWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    // margin-left: ${ props => props.compact ? '20%' : '0' };
`

const GroupName = styled(Subheading)`
`

const GroupList = ({ team }) => {
    return (
        <TeamWrapper key={ team.id }>
            <GroupName>{ team.name }</GroupName>
            <List>
                {
                    team.members.map(member => 
                        member.facility && member.facility !== member.organization ? (
                            <ListItem key={ member.name }
                                primary={ member.name }
                                secondary={ <a href={ member.url } target="_blank" rel="noopener noreferrer">{ member.facility }</a> }
                                tertiary={ `@${ member.organization }` }
                            />
                        ) : (
                            <ListItem key={ member.name }
                                primary={ member.name }
                                secondary={ <a href={ member.url } target="_blank" rel="noopener noreferrer">{ member.organization }</a> }
                            />
                        )
                    )
                }
            </List>
        </TeamWrapper>
    )
}

export const ContributorsModule = props => {
    const coreTeam = contributors.find(team => team.id === 'core-team')
    const scienceDesignDrivers = contributors.find(team => team.id === 'science-design-drivers')
    const facilityPartners = contributors.find(team => team.id === 'facility-partners')
    return (
        <Module title="FABRIC Contributors">
            <Grid fluid>
                <Row gutterWidth={ 0 }>
                    <Col xs={ 12 } md={ 6 }>
                        <GroupList team={ coreTeam } />
                        <GroupList team={ scienceDesignDrivers } />
                    </Col>
                    <Col xs={ 12 } md={ 6 }>
                        <GroupList team={ facilityPartners } />
                    </Col>
                </Row>
            </Grid>
        </Module>
    )
}
