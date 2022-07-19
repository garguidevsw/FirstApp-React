
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, number }) => {

  return (
    <>
        <h1 data-testid="test-title">{ title }</h1>
        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>{ number + 2 }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    number: PropTypes.number
}

FirstApp.defaultProps = {
    subtitle: 'Este es un subtitulo por defecto',
    number: 0
}
