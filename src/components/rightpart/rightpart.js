import React from 'react';
import './rightpart.css'

const rightpart = () => {
    return (
        <div>
                <div className="overall ">
            <span className="moveright">ACTIVE APPS</span><span class="glyphicon glyphicon-menu-hamburger"></span>
            <div className="mainclass">
                     

                        <div className="paddinginside">
                                    <div className="row">
                                <div className="col-sm-4"><span style={{fontSize:"40px"}} class="glyphicon glyphicon-phone-alt  padd " ></span></div>
                                <div className="col-sm-8 borderfordemo">
                                    <span className="putin changefont">Smart Meetings...</span>
                                   
                                    <span className=""> <span class="glyphicon glyphicon-camera"></span>front cam</span>


                                </div>

                            </div>

                        </div>
                
            </div>
            <div className="mainclass">
            <div className="paddinginside">
                                    <div className="row">
                                <div className="col-sm-4"><span style={{fontSize:"40px"}} class="glyphicon glyphicon-compressed padd " ></span></div>
                                 
                                <div className="col-sm-8 borderfordemo ">
                                   
                                    <span className="changefont">Safety Mask Alerts...</span>
                                    <span> <span class="glyphicon glyphicon-camera"></span>Site1</span>


                                </div>

                            </div>

                        </div>


            </div>
            <div className="mainclass">
            <div className="paddinginside">
                                    <div className="row">
                                    <div className="col-sm-4"><span style={{fontSize:"40px"}} class="glyphicon glyphicon-stats  padd " ></span></div>

                                    <div className="col-sm-8 borderfordemo">
                                    <span className="changefont">Store HeatMap..</span>


                                </div>

                            </div>

                        </div>
            </div>
        </div>



        </div>
        
    );
}

export default rightpart;
