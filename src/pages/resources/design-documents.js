import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title } from '../../components/typography'
import { useDesignDocuments } from '../../hooks'
import { DocumentLink } from '../../components/link'

const DesignDocumentsPage = props => {
    const documents = useDesignDocuments()

    return (
        <AnimateOnMount>
            <SEO
                title="Design Documents"
                description=""
            />
            
            <Title>Design Documents</Title>

            {
                documents.map((doc, i) => (
                    <div key={ i } style={{ display: 'flex' }}>
                        <DocumentLink to={ doc.url } docType="PDF">{ doc.title }</DocumentLink>
                    </div>
                ))
            }

        </AnimateOnMount>
    )
}

export default DesignDocumentsPage
