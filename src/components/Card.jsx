import React,{useCallback} from 'react';
import{useNavigate} from "react-router-dom";

const Card=(props)=> {
    const navigate =useNavigate();
    const handleOnClick = useCallback(() => navigate ('/talep', {replace:true}), [navigate]);
    return (
        <>
                <div className="col-sm-6">
                    <div className="card" className="card text-end">
                        <div className="card border-primary mb-0.5">
                            <div className="card-body">
                            <div className="card-header">
                                <i className={props.iconString}  aria-hidden="true"></i>
                                {props.headerName}
                            </div>
                            <div className="card-body text-dark">
                                <p>{props.text}</p>
                            </div>
                            <button
                                type="button"
                                onClick={handleOnClick}
                                className="btn btn-primary">
                                {props.button}
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Card;