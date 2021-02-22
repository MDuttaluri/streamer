import { useState } from "react";
import Auxillary from "./Auxillary";
import { Container,Row,Col,Button } from "react-bootstrap";
import monitor from '../../asset/monitor.png';
import DeviceCard from '../DeviceCard';

function Card(){


    return <div class="MonitorOuterDiv">
        <div class="MonitorInnerDiv">
            <h2 >Front-End</h2>
            <Container fluid="true">
            <Row noGutters="true" md="2" sm="1" xs="1" xl="2" lg="2">
                <Col>
                <DeviceCard color="orange" header="HTML"/>
                </Col>
                <Col>
                <DeviceCard color="#16d0e0" header="CSS"/>
                </Col>
               
            </Row>
            <Row>
            <Col>
                <DeviceCard color="#e016a3" header="JavaScript"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button>Next</Button>
                </Col>
            </Row>
            </Container>
        </div>
        <div class="DeviceHomeButton">
               <div class="DeviceHomeButtonInner"/>
           </div>
        <div class="MonitorBaseDiv"/>
    </div>;
}


export default Card;