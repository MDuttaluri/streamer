import { motion } from "framer-motion"
import Card from "./Player";
import {Row,Col, Container} from "react-bootstrap";
import 'semantic-ui-css/semantic.min.css'
import Auxillary from "./Auxillary";

function HomePage(){
    return <div  class="StreamPageMainDiv">
        <motion.div 
        
        animate={{
            x:0
        }}
        whileHover={{ scale: 1.5 ,
          
        }}
        whileTap={{ scale: 0.9 }}
        children={
                <div style={{margin:"10px"}}>
                    <h3 style={{textAlign:"center"}}><h1 style={{display:"inline",color:"#6209b6"}}>T</h1>ech <h1 style={{display:"inline",color:"#6209b6"}}>S</h1>tack</h3>
                    <h3 style={{textAlign:"center"}}>MERN</h3>
                </div>
            }
        />
        
        <center>
            
                
               
                    <Card/>
                  
                
                
           
          
            
        </center>
    </div>;
}


export default HomePage;