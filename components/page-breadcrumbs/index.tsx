import { Breadcrumbs } from "govuk-react"

const PageBreadcrumbs = () => {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Link href="#">
                Waste tracking service
            </Breadcrumbs.Link>
            <Breadcrumbs.Link href="/">
                Green list waste overview
            </Breadcrumbs.Link>
                
        </Breadcrumbs>
    )
}