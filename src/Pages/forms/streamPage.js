import { animate, motion, useAnimation} from "framer-motion"
import Card from "./Player";
import {Row,Col, Container,Button} from "react-bootstrap";
import 'semantic-ui-css/semantic.min.css'
import Auxillary from "./Auxillary";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import express from "../../asset/express.png";
import nodejs from '../../asset/nodejs.png';

function HomePage(){
  
    const [controls,setControls] = useState([useAnimation(),useAnimation()]);
    
    return <div >
        <motion.div  
        
        animate={{ x:[-500,0] ,transition:{duration:0.5}}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        whileHover={{ scale: 2.5 }}
        whileTap={{ scale: 0.9 , transition:{duration:0.5}}}
        children={
                <div style={{margin:"10px",color:"white"}}>
                    <h3 style={{textAlign:"center"}}><h1 style={{display:"inline",color:"orange"}}>T</h1>ech <h1 style={{display:"inline",color:"#e016a3"}}>S</h1>tack</h3>
                </div>
            }
        />
            
            <FrontEnd class="FrontEnd" nextControl={controls[1]} control={controls[0]}  />
            <motion.div animate={controls[1]}>
                    <Middleware class="Middleware" control={controls[1]} prevControl={controls[0]}  />
            </motion.div>
               

            
        </div>;
}

function FrontEnd(props){
    
    return <div class="StreamPageMainDiv" id="FrontEnd">
        
        
        <center>
                <motion.div
                    animate={{scale:[0,1],transition:{duration:2},}}
                >
                    <Card control={props.control} nextControl={props.nextControl}/>
                </motion.div>
        </center>
    </div>;
}



function Middleware(props){
    return <div class="Middleware" id="Middleware">
        <center>
            <h1>Server Side</h1>

            <div class="ServerOuterDiv">
                <div class="Server">
                    <ColorLED />
                    <ColorLED />
                    <ColorLED />
                    <ColorLED />
                    </div>
                <Image src={nodejs} style={{height:"30%"}}/>
                <Image src={express} style={{height:"15%"}}/>
                <CPU/>
            </div>
            



            <div style={{width:"70%",marginTop:"15px"}}>
                <Button style={{backgroundColor:"black",marginLeft:"5%"}} onClick={()=>{
                    props.control.start({
                        opacity:[1,0],transition:{duration:1}
                    })
                    document.getElementById("Middleware").style.zIndex="0";
                    document.getElementById("FrontEnd").style.zIndex="1";
                    props.prevControl.start({
                        opacity:1,
                        scale:1,
                        transition:{duration:1}
                    })

                }}>Back</Button>
                <Button style={{backgroundColor:"black",marginLeft:"25%"}} onClick={()=>{
                    props.control.start({
                        scale:[1,0]  , transition:{duration:2,}
                    })
                }}>Next</Button>
            </div>
        </center>
    </div>;
}


function ColorLED(props){
    return <div class="ServerRack">
        <Row>
            <div class="ColorLED" style={{marginLeft:"20%",backgroundColor:"blue",borderColor:"blue"}}/>
            <div class="ColorLED" style={{marginLeft:"10%",backgroundColor:"blue",borderColor:"blue"}}/>
            <div class="ColorLED" style={{marginLeft:"10%"}}/>
            <div class="ColorLED" style={{marginLeft:"10%",backgroundColor:"blue",borderColor:"blue"}}/>
            <div class="ColorLED" style={{marginLeft:"10%",backgroundColor:"blue",borderColor:"blue"}}/>
        </Row>
    </div>
}


function CPU(){
    return <div class="CPUOuter">
        <div class="ServerRack">
                <div class="ColorLED" style={{marginLeft:"70%",marginTop:"20%"}}/>
            </div>
            <div class="ServerRack">
                <div class="ColorLED" style={{marginLeft:"70%",marginTop:"20%",backgroundColor:"blue",borderColor:"blue"}}/>
            </div>
            <div class="ServerRack">
                <div class="ColorLED" style={{marginLeft:"70%",marginTop:"20%",backgroundColor:"blue",borderColor:"blue"}}/>
            </div>
            <div class="ServerRack">
                <div class="ColorLED" style={{marginLeft:"70%",marginTop:"20%",backgroundColor:"blue",borderColor:"blue"}}/>
            </div>
    </div>
}
export default HomePage;