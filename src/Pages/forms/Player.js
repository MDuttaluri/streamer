import { useState } from "react";
import Auxillary from "./Auxillary";
import { Container,Row,Col,Button,Jumbotron, Image } from "react-bootstrap";
import monitor from '../../asset/monitor.png';
import DeviceCard from '../DeviceCard';
import { motion,useAnimation } from "framer-motion"

import reactLogo from "../../asset/logo192.png";
import html from "../../asset/html.png";
import js from "../../asset/js.png";
import css from "../../asset/css.png";
import front_end from "../../asset/front_end.png";
import {NavLink} from 'react-router-dom';

function Card(props){
    const [controls,setControls] = useState(props.control);
    
    return <motion.div animate={controls}><div class="MonitorOuterDiv">
        <Notch/>
        <div class="MonitorInnerDiv">
        
            <Jumbotron style={{backgroundColor:"#77DD77",borderRadius:"10px"}} fluid>
            
                <h1 style={{display:"inline",color:"black"}}>Front-End </h1>
                <Image src={front_end} style={{width:"5%"}}></Image>
            </Jumbotron>
            <Container fluid="true">
            <Row noGutters md="2" sm="1" xs="1" xl="2" lg="2">
                <Col>
                <DeviceCard color="orange" image={html} header="HTML"/>
                
                </Col>
                <Col>
                <DeviceCard color="#16d0e0" image={css} header="CSS"/>
                </Col>
            </Row>
            <Row noGutters md="2" sm="1" xs="1" xl="2" lg="2">
            <Col>
                <DeviceCard color="#e016a3" image={js} header="JavaScript"/>
                </Col>
                <Col>
                <DeviceCard color="#ffffff" fontColor="black" image={reactLogo} header="React.js"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button style={{backgroundColor:"black",outlineColor:"black"}} onClick={ async ()=>{
                         props.nextControl.set({scale:1,opacity:0});
                         await controls.start({
                             scale:[1,100],
                             opacity:[1,0],
                             transition:{duration:1}
                         })
                         document.getElementById("FrontEnd").style.zIndex="-1";
                         //props.nextControl.set({opacity:1});
                         document.getElementById("Middleware").style.zIndex="1";
                         await props.nextControl.start({opacity:[0,1],transition:1}) ;
                        
                         
                       
                      
                        

                    }}>Next</Button>
                </Col>
            </Row>
            </Container>
        </div>
        <div class="DeviceHomeButton">
               <div class="DeviceHomeButtonInner">
                   </div>
           </div>
        <div class="MonitorBaseDiv"/>
    </div>
    </motion.div>;
}


function Notch(){
    return <div class="Notch">
        
    </div>
}



export default Card;