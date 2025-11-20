import { PageHeading } from "../page-heading/PageHeading.jsx";

export const PageStructure = ({ children, title }) => {
    return (
        <>
            <PageHeading title={ title } />
            <div class={ `page_content` }>
                { children }
            </div>
        </>
    )
}