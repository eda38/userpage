import React from 'react';
import Nav from "./Nav";
import Side from "./Side";
import Card from "./Card";
import {Outlet} from "react-router-dom";

const MainPage = () => {

    return (
        <div className="container mt-2 ">
            <Nav/>
            <div className="row text-black  ">
                <div className="col-md-3 bg-light" >
                    <Side/>
                </div>
                <div className="col-md-9  bg-light ">
                    <br></br>
                    <div className="row" style= {{width: '40rem', height:'10rem'}}>
                        <Card headerName={" Kalan izin"}
                              iconString={"fa fa-calendar-alt"}
                              text={"23"}
                              button={"İzin Talep Et"}
                        />
                        <Card headerName={" Yetenek"}
                              iconString={"far fa-file"}
                              text={"..."}
                              button={"Görüntüle"}
                        />
                    </div>
                    <br></br>
                    <p className="lead"></p>
                    <div className="row"  >
                        <Nav/>
                        <div className="col-md-9 bg-light ">
                            <br></br>
                            <Outlet />
                            <p className="lead"></p>
                        </div>

                    </div>
                </div>
                <Nav/>
            </div>
        </div>
    );
}

export default MainPage;