// const getMessage = () => {
//     return 'Mensaje desde la función';
// }

// const newMessage = {
//     title: 'Julio',
//     message: 'Hola mundo'
// };
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, number }) => {

  return (
    <>
        <h1>{ title }</h1>
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
