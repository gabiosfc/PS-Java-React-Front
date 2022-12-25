import Grid from '../Grid';
import './Botao.css'


const Botao = (props) => {
    return (<button className='botao'>
        {props.texto}
    </button>)
}

export default Botao