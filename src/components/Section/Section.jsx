import PropTypes from 'prop-types';

const Section = ({title}) => {
    return(
        <>
        <h2>{title}</h2>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export {Section}