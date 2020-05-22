import { graphql, useStaticQuery } from 'gatsby'

const workshopReportsQuery = graphql`{
    reports: allWorkshopReportsYaml {
        edges {
            node {
                title
                url
            }
        }
    }
}`

export const useWorkshopReports = () => {
    const { reports } = useStaticQuery(workshopReportsQuery)
    return reports.edges.map(({ node }) => node)
}
