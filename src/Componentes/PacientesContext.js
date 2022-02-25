import { createContext, useState } from 'react'


export const PacientesC = createContext('default');


const PacientesContext = ({ children }) => {

    const [pacientes, setPacientes] = useState([]);
    const [modEdit, setModEdit] = useState(false);
    const [elActual, setElActual] = useState('');


    const [value, setValue] = useState({
        nombreM: '',
        propietario: '',
        tel: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [objeto, setObjeto] = useState({
        id: '',
        nombreM: '',
        propietario: '',
        tel: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    return (
        <div>
            <PacientesC.Provider value={{
                pacientes, setPacientes,
                value, setValue,
                objeto, setObjeto, modEdit,
                setModEdit, elActual, setElActual
            }}>
                {children}
            </PacientesC.Provider>
        </div>
    )
}

export default PacientesContext