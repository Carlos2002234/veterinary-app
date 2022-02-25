import { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';
import { PacientesC } from './PacientesContext';
import Datos from './Datos'


const useStyles = makeStyles({
    root: {
        display: 'block',
        marginLeft: '10% !important',
        width: '80%',
        margin: '0 auto !important',
        fontWeight: 'bolder',
        fontSize: '1.3rem !important ',
        marginBottom: '1em !important ',
    },

    btnError: {
        display: 'block',
        marginLeft: '10% !important',
        width: '80%',
        margin: '0 auto !important',
        fontWeight: 'bolder',
        fontSize: '1.3rem !important ',
        marginBottom: '1em !important ',
    }
});

const Container = () => {

    const classes = useStyles();
    const { value, setValue, pacientes, setPacientes, objeto, setObjeto, modEdit, setModEdit, elActual } = useContext(PacientesC)
    const [mostrarError, setMostrarError] = useState(false);

    //imprimimos valor cada que cambia el input

    useEffect(() => {
        setObjeto({
            id: Date.now(),
            nombreM: value.nombreM,
            propietario: value.propietario,
            tel: value.tel,
            fecha: value.fecha,
            hora: value.hora,
            sintomas: value.sintomas
        })


    }, [value])


    //dar valores

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //comprobamos campos vacios

        if (value.nombreM === '' || value.propietario === '' || value.tel === '' || value.fecha === '' || value.hora === '' || value.sintomas === '') {
            return setMostrarError(true);//mostrar error
        }

        //limpiar values
        cleanValues();
        setMostrarError(false); //no mostrar el error 

        //insert to the array 
        setPacientes([objeto, ...pacientes])
    }


    const cleanValues = () => {
        setValue({
            nombreM: '',
            propietario: '',
            tel: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }


    const handleEdit = (e) => {
        e.preventDefault();
        //comprobamos campos vacios

        if (value.nombreM === '' || value.propietario === '' || value.tel === '' || value.fecha === '' || value.hora === '' || value.sintomas === '') {
            return setMostrarError(true);//mostrar error
        }


        const newEdit = pacientes.map(x => x.nombreM === elActual.nombreM
            ? ({
                ...x,
                nombreM: value.nombreM,
                propietario: value.propietario,
                tel: value.tel,
                fecha: value.fecha,
                hora: value.hora,
                sintomas: value.sintomas
            }) : x)

        //desactivamos el modoEdit
        setPacientes(newEdit)
        setModEdit(false);
        //volvemos a limpiar

        cleanValues();

    }


    return (
        <div>
            <div className='container'>
                <section>
                    <h2 className='container__title'>Datos del paciente</h2>

                    <form className='form'>
                        <label className='form__label'>Nombre Mascota:</label>
                        <input name='nombreM' onChange={handleChange} value={value.nombreM} className='form__input' placeholder='Nombre de mascota'></input>

                        <label className='form__label'>Propietario:</label>
                        <input name='propietario' onChange={handleChange} value={value.propietario} className='form__input' placeholder='Propietario'></input>


                        <label className='form__label'>Teléfono:</label>
                        <input name='tel' onChange={handleChange} value={value.tel} className='form__input' placeholder='Número de Teléfono '></input>


                        <label className='form__label'>Fecha:</label>
                        <input name='fecha' onChange={handleChange} value={value.fecha} type='date' className='form__input' ></input>



                        <label className='form__label'>Hora:</label>
                        <input name='hora' onChange={handleChange} value={value.hora} type='time' className='form__input' ></input>


                        <label className='form__label'>Sintomas:</label>
                        <textarea name='sintomas' onChange={handleChange} value={value.sintomas} className='form__text'></textarea>


                        {modEdit ? <Button onClick={handleEdit} type='submit' className={classes.root} variant="contained" color="success">
                            Editar cita
                        </Button> : <Button onClick={handleSubmit} type='submit' className={classes.root} variant="contained" color="success">
                            Crer Cita
                        </Button>}


                        {mostrarError ? <Button className={classes.btnError} variant="contained" color="error">
                            Todos los campos  requeridos
                        </Button> : null}


                        <br></br>
                        <br></br>
                        <br></br>
                    </form>

                </section>

                <section>
                    <h4 className='titleAdministrador'>Administra tus citas</h4>
                    <br></br>

                    {pacientes.length > 0 ? <Datos /> : null}
                </section>


            </div>

            <br></br>
            <br></br>
        </div>
    )
}


export default Container