import { motion } from "framer-motion";

function Middleware(){
    return <div class="StreamPageMainDiv">
         <motion.div  
        
        animate={{ x:[-500,0] ,transition:{duration:0.5}}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        whileHover={{ scale: 2.5 }}
        whileTap={{ scale: 0.9 , transition:{duration:0.5}}}
        children={
                <div style={{margin:"10px"}}>
                    <h3 style={{textAlign:"center"}}><h1 style={{display:"inline",color:"orange"}}>T</h1>ech <h1 style={{display:"inline",color:"#e016a3"}}>S</h1>tack</h3>
                </div>
            }
        />
    </div>;
}



export default Middleware;