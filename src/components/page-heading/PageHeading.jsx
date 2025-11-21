import classes from './PageHeading.module.css';

export const PageHeading = ({ title }) => {
    return (
        <div className={ classes['page_heading'] }>
            <h1>{ title }</h1>
        </div>
    );
}