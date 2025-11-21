import { HeadingContent } from "../heading-content/HeadingContent.jsx"

export const HeadAndContent = ({ children, title, styleClass }) => {
    return (
        <div className={ `head_and_content ${ styleClass }` }>
            <HeadingContent title={ title } />
            { children }
        </div>
    )
}