import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div className='App'>
            <div className='container'>
                <div className='row mt-3 border border-primary rounded'>
                    <div className='col-md-4-auto'>
                        <p className="fs-1 text">This isn't supossed to happen...</p>
                        <p className="fs-4 text">Sorry, an unexpected error has occurred:</p>
                        <div className="alert alert-danger" role="alert">
                            <p className="fst-italic">{error.statusText || error.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}