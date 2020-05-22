import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DocumentIcon, PdfIcon } from '../icons'

export const ExternalLink = styled.a.attrs(props => ({ target: '_blank', rel: 'noopener noreferrer', href: props.to }))``

ExternalLink.propTypes = {
    children: PropTypes.node.isRequired,
}

//

const docIcons = {
    pdf: PdfIcon,
    generic: DocumentIcon,
}

const IconWrapper = styled.span`
    padding: 0.5rem;
`

export const DocumentLink = ({ docType, children, ...props}) => {
    const Icon = docIcons[docType.toLowerCase()]

    return (
        <ExternalLink { ...props } style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconWrapper>
                <Icon fill="var(--color-primary)" size={ 36 } />
            </IconWrapper>
            <span>
                { children }
            </span>
        </ExternalLink>
    )
}

DocumentLink.propTypes = {
    docType: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

DocumentLink.defaultProps = {
    docType: 'generic',
}
