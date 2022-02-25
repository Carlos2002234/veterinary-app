import { useContext } from 'react'
import { PacientesC } from './PacientesContext';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    btnEliminar: {
        marginTop: '1em !important',
        marginBottom: '1em !important ',
    },
    btnEditar: {
        marginLeft: '1em !important',
        marginTop: '1em !important',
        marginBottom: '1em !important ',
    }
})

export const Datos = () => {

    const classes = useStyle();

    const { pacientes, setPacientes, setModEdit, setElActual, setValue } = useContext(PacientesC)


    //eliminar paciente


    const eliminarP = (id) => {
        const filtrar = pacientes.filter(x => x.id !== id);

        const confirm = window.confirm(' ¿Seguro que quieres eliminar este paciente?')

        if (confirm) {
            setValue({
                nombreM: '',
                propietario: '',
                tel: '',
                fecha: '',
                hora: '',
                sintomas: ''
            })
            return setPacientes(filtrar);
        }

    }

    const activeEdit = (el) => {
        setModEdit(true); //activamos el modo edicion 
        setElActual(el) //obtenemos el elemento a editar
        //llenamos los valores del input

        setValue({
            nombreM: el.nombreM,
            propietario: el.propietario,
            tel: el.tel,
            fecha: el.fecha,
            hora: el.hora,
            sintomas: el.sintomas
        })

    }

    return (
        <div>

            {pacientes.map((el) =>

                <div className='containerInfo' key={el.id}>
                    <li>
                        <h2 className='containerInfo__nombre'>{el.nombreM}</h2>
                        <h2 className='containerInfo__datos'><span>Propietario:</span>{el.propietario}</h2>
                        <h2 className='containerInfo__datos'><span>Télefono:</span>{el.tel}</h2>
                        <h2 className='containerInfo__datos'><span>Fecha:</span>{el.fecha}</h2>
                        <h2 className='containerInfo__datos'><span>Hora:</span>{el.hora}</h2>
                        <h2 className='containerInfo__datos'><span>Sintomas:</span>{el.sintomas}</h2>

                        <aside style={{ display: 'flex' }} className='btnsC'>
                            <Button onClick={() => eliminarP(el.id)} className={classes.btnEliminar} color='error' variant="outlined" startIcon={<DeleteIcon />}>
                                Eliminar
                            </Button>

                            <Button onClick={() => activeEdit(el)} className={classes.btnEditar} color='secondary' variant="outlined" startIcon={<SendIcon />}>
                                Editar
                            </Button>
                        </aside>

                    </li>
                </div>)}

            <br></br><br></br>

        </div>
    )
}

export default Datos;