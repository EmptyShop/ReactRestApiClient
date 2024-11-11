import { useEffect, useState } from "react";

export default function Listado(){
    const url = 'http://192.168.1.64:5000/contact';
    const [listaContactos,setListaContactos] = useState([]);
    const [id,setId] = useState('');
    const [fullname,setFullname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [operacion,setOperacion] = useState(1);
    const [titulo,setTitulo] = useState('');
    const [error, setError] = useState([]);

    useEffect(() => {
        getContactos();
    }, []);

    function getContactos(){
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setListaContactos(data);
        });
    }

    function fillModal(op,contacto){
        setOperacion(op);
        setId('');
        setFullname('');
        setEmail('');
        setPhone('');
        setError([]);

        if (op === 1){
            setTitulo('New Contact');
        }
        else if(op === 2){
            setTitulo('Edit Contact');
            setId(contacto.id);
            setFullname(contacto.fullname);
            setEmail(contacto.email);
            setPhone(contacto.phone);
        }
        else{
            document.getElementById("btnCerrar").click();
        }
    }

    function validar(){
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var parametros;
        var metodo;
        let errores = [];

        if (fullname.trim() === ''){
            errores = [...errores, 'Fullname required.'];
        }
        if (email.trim() === '' || !emailPattern.test(email)){
            errores = [...errores, 'Invalid email'];
        }
        if (phone.trim() === ''){
            errores = [...errores, 'Phone required.'];
        }
        setError(errores);

        if (errores.length === 0){
            let urlOperacion = url;
            if (operacion === 1){
                parametros = {fullname:fullname.trim(),email:email.trim(),phone:phone.trim()};
                metodo = 'POST';
            }
            else{
                urlOperacion = `${url}/${id}`;
                parametros = {fullname:fullname.trim(),email:email.trim(),phone:phone.trim()};
                metodo = 'PUT';
            }
            
            enviarDatos(urlOperacion, metodo, parametros);
        }
    }

    async function enviarDatos(url, metodo, parametros){
        const res = await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parametros)
        });
        
        if (res.ok && res.status >= 200 && res.status < 300){
            var descripcion = await res.json();
        }
        else{
            alert("No se pudo efectuar la operación.");
            console.log(res.status);
            return;
        }

        if ((metodo ==='POST' || metodo ==='DELETE') || (metodo ==='PUT' && descripcion.success)){
            alert("Operación realizada");
            getContactos();
            document.getElementById("btnCerrar").click();
        }
        else{
            alert(`No se pudo efectuar la operación: ${descripcion.error}.`);
            console.log(descripcion.error);
        }
    }

    function eliminarContacto(id, fullname){
        if (window.confirm(`¿Eliminar el contacto ${fullname}?`)){
            enviarDatos(`${url}/${id}`,'DELETE','');
        }
    }

    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalContactos'
                                onClick={() => fillModal(1)}>
                                Add Contact
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th><th>Fullname</th><th>Email</th><th>Phone</th><th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {
                                        listaContactos.map((contacto, i) => (
                                            <tr key={contacto.id}>
                                                <td>{(i+1)}</td>
                                                <td>{contacto.fullname}</td>
                                                <td>{contacto.email}</td>
                                                <td>{contacto.phone}</td>
                                                <td align="center">
                                                    <button className="btn btn-warning" data-bs-toggle='modal' data-bs-target="#modalContactos"
                                                        onClick={() => fillModal(2,contacto)}>
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </button>&nbsp;
                                                    <button className="btn btn-danger" onClick={() => eliminarContacto(contacto.id, contacto.fullname)}>
                                                        <i className="bi bi-trash3"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modalContactos" className='modal fade' aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="h5">{titulo}</label>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" id="id"></input>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="bi bi-person-lines-fill"></i></span>
                                <input type="text" id="fullname" className="form-control" placeholder="Fullname" value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}></input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="bi bi-envelope-at-fill"></i></span>
                                <input type="text" id="email" className="form-control" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="bi bi-telephone-fill"></i></span>
                                <input type="text" id="phone" className="form-control" placeholder="Phone" value={phone}
                                    onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                            <div className="d-grid col-6 mx-auto">
                                <button className="btn btn-success" onClick={validar}>
                                    <i className="bi bi-floppy-fill"></i> Save
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer ">
                            {
                                error.length > 0 && 
                                    <div className="alert alert-danger w-75 me-auto" role="alert">
                                        <ul>{
                                            error.map((err,i) => (
                                                <li key={i}>{err}</li>
                                            ))
                                        }</ul>
                                    </div>
                            }
                            <button type="button" id="btnCerrar" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
