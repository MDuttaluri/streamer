import { animate, motion, useAnimation,useViewportScroll,useTransform, AnimateSharedLayout, AnimatePresence} from "framer-motion"
import { Frame } from "framer";

import { useEffect,useState } from "react";

export default function Programming(){
    return (
        <div class="LangOuterDiv">
        <center>
        <div class="FormBox">
                <h1 style={{fontSize:"3rem"}}>Programming Languages</h1>
               <AnimateSharedLayout>
                    <Card language="Python"/>
                    <Card language="Java"/>
                    <Card language="C++"/>
                    </AnimateSharedLayout>
        </div>
    </center>
    </div>
    )

}



function Card(props){
    const cardControl = useAnimation();
    const previewControl = useAnimation();
    const bodyControl = useAnimation();
    const [preview,setPreview] = useState("vachu le");
    const [body,setBody] = useState("Nijam ga vachu ra babu!");
    useEffect(()=>{
        bodyControl.set({opacity:0});
    },[])
    
    return <motion.div id={"LangCard-"+props.language} animate={cardControl} class="LangCard" onMouseEnter={async()=>{
        cardControl.start({
          //  rotate:[0,360],
            scale:[1,3],
            transition:{duration:1}
            
        })
        await previewControl.start({
            opacity:[1,0]
        })
        document.getElementById("LangCard-"+props.language).style.zIndex=99;
        document.getElementById("LangCard-"+props.language+"-preview").style.display="none";
        document.getElementById("LangCard-"+props.language+"-body").style.display="inline";
        await bodyControl.start({
            opacity:[0,1]
        })
        
        
    }} onMouseLeave={()=>{
        cardControl.start({
            scale:[3,1],transition:{duration:1},
        })
        document.getElementById("LangCard-"+props.language).style.zIndex="0";

    }}>
         
        
         <h2>{props.language}</h2>
         <motion.p id={"LangCard-"+props.language+"-preview"} style={{display:"inline"}} animate={previewControl}>{preview}</motion.p>
         <motion.p initial={true} id={"LangCard-"+props.language+"-body"} style={{display:"none"}} animate={bodyControl}>{body}</motion.p>
       
    </motion.div>;
}
    



