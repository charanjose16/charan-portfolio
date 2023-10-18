import { useState,useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import {ArrowRightCircle} from "react-bootstrap-icons";


export const Banner =()=>{
    const [loopNum,setLoopNum]= useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [text,setText] = useState('');
    const [delta,setDelta]= useState(300-Math.random()*100);
    const toRotate =["Web Developer","Web Designer","Full Stack Developer","MERN Stack Developer"];
    const period = 2000;

    useEffect(()=>{
        
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text,delta])

    const tick=()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(100);
        }
    }

    return(
        <section className="banner" id="home">
             <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi I'm Charan `}<span className="wrap"> {text}</span></h1>
                    <p>csdljsvldsudfsjlhvjhs sxjshvljhsa xlsah xhsvxlusavjsa xh saulxvsalx ulsahvxljsavxlsvauc sucvusvclusa lusvuxvslux sljhxvsu</p>
                    <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                         <img src={headerImg} alt="Headder img"/>
                    </Col>
                </Row>
             </Container>
        </section>
    )
}