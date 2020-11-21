import React from "react";
import MyNav from "./components/Nav";
import ProjectView from "./components/ProjectView";
import {Container, Row} from "react-bootstrap";

// images
import ANNABHAU from "./images/ProjectsMain/anna bhau sathe.jpg";
import ANNA1 from "./images/ProjectImages/anna bhau/1.jpg"
import ANNA2 from "./images/ProjectImages/anna bhau/2.jpg"
import ANNA3 from "./images/ProjectImages/anna bhau/3.jpg"
import ANNA4 from "./images/ProjectImages/anna bhau/4.jpg"
import ANNA5 from "./images/ProjectImages/anna bhau/5.jpg"
import ANNA6 from "./images/ProjectImages/anna bhau/6.jpg"
import ANNA7 from "./images/ProjectImages/anna bhau/7.jpg"
import ANNA8 from "./images/ProjectImages/anna bhau/8.jpg"
import ANNA9 from "./images/ProjectImages/anna bhau/9.jpg"

import DIVINEWRLD from "./images/ProjectsMain/soc of divine wrld.jpg";
import WRLD1 from "./images/ProjectImages/divine wrld/1.jpg";
import WRLD2 from "./images/ProjectImages/divine wrld/2.jpg";

import OMSAI from "./images/ProjectsMain/om sai.jpg";
import OM1 from "./images/ProjectImages/om sai/1.jpg";
import OM2 from "./images/ProjectImages/om sai/2.jpg";
import OM3 from "./images/ProjectImages/om sai/3.jpg";

import ROWHOUSE from "./images/ProjectsMain/row house shah.jpg";
import HOUSE1 from "./images/ProjectImages/shah row house/1.jpg";
import HOUSE2 from "./images/ProjectImages/shah row house/2.jpg"; 

import SAIDHAM from "./images/ProjectsMain/sai dham.jpg";
import SAI1 from "./images/ProjectImages/sai dham/1.jpg";
import SAI2 from "./images/ProjectImages/sai dham/2.jpg";

import JAGRUTI from "./images/ProjectsMain/jagruti.jpg";
import JAG1 from "./images/ProjectImages/jagruti/1.jpg";

import McCOM from "./images/ProjectsMain/McCOM.jpg";
import COM1 from "./images/ProjectImages/industrial/1.jpg";
import COM2 from "./images/ProjectImages/industrial/2.jpg";

import SASSM from "./images/ProjectsMain/sass.jpg"
import SASSM1 from "./images/ProjectImages/sass office/1.jpg";
import SASSM2 from "./images/ProjectImages/sass office/2.jpg";
import SASSM3 from "./images/ProjectImages/sass office/3.jpg";
import SASSM4 from "./images/ProjectImages/sass office/4.jpg";

import BLUESTAR from "./images/ProjectsMain/bluestar.jpg";
import BLUE1 from "./images/ProjectImages/blue/1.jpg";
import BLUE2 from "./images/ProjectImages/blue/2.jpg";
import BLUE3 from "./images/ProjectImages/blue/3.jpg";
import BLUE4 from "./images/ProjectImages/blue/4.jpg";

import WORLI from "./images/ProjectsMain/worliplan.jpg";
import WIMG1 from "./images/ProjectImages/worliplan/1.jpg";
import WIMG2 from "./images/ProjectImages/worliplan/2.jpg";


function Projects() {
    return (
      <div>
        <MyNav/>
        <br/><br/><br/>
          <Container fluid className="project-container">
            <Row md={2} noGutters={true}>        
              <ProjectView 
                  imgMain={ANNABHAU} 
                  name="SahityRatna Annabhau Sathe Smarak" 
                  img1={ANNABHAU}
                  img2={ANNA1}
                  img3={ANNA2}
                  img4={ANNA3}
                  img5={ANNA4}
                  img6={ANNA5}
                  img7={ANNA6}
                  img8={ANNA7}
                  img9={ANNA8}
                  img10={ANNA9}
                  client="Maharashtra Government"
                  address="Ghatkoper(W), Mumbai"
                  area="215000 sq.m"

              />
              <ProjectView 
                  imgMain={DIVINEWRLD} 
                  name="Urban Community Development Centre" 
                  img1={DIVINEWRLD}
                  img2={WRLD1}
                  img3={WRLD2}
                  client="Society of The Divine Word"
                  address="Bandra(W), Mumbai"
                  area="18500 sq.ft."
              />
              <ProjectView 
                  imgMain={OMSAI} 
                  name="Building No 253/254 Om sai tower" 
                  img1={OMSAI}
                  img2={OM1}
                  img3={OM2}
                  img4={OM3}
                  client="Om Sai SSS Developers"
                  address="Vikhroli(E), Mumbai"
                  area="332260 sq.ft."
              />
              <ProjectView 
                  imgMain={ROWHOUSE} 
                  name="SHAHPUR ROW HOUSES" 
                  img1={ROWHOUSE}
                  img2={HOUSE1}
                  img3={HOUSE2}
                  client="Glaciers Buildcon Developers"
                  address="Shirol, Shahapur"
                  area="83060 sq.ft."
              />
              <ProjectView 
                  imgMain={SAIDHAM} 
                  name="SAI DHAM" 
                  img1={SAIDHAM}
                  img2={SAI1}
                  img3={SAI2}
                  client=""
                  address=""
                  area=""
              />
              <ProjectView 
                  imgMain={JAGRUTI} 
                  name="JAGRUTI CHS" 
                  img1={JAGRUTI}
                  img2={JAG1}
                  img3={JAGRUTI}
              />
              <ProjectView
                  name="Mc COM INDUSTRIES"
                  imgMain={McCOM}
                  img1={McCOM}
                  img2={COM1}
                  img3={COM2}
                  client="McCom Industries"
                  address="Bhwiwandi"
                  area="80555 Sq.ft."
              />
              <ProjectView
                  name="SASS OFFICE"
                  imgMain={SASSM}
                  img1={SASSM}
                  img2={SASSM1}
                  img3={SASSM2}
                  img4={SASSM3}
                  img5={SASSM4}
                  client="Sahitya Ratna Annbhau Sathe Smarak Samiti"
                  address="Govandi(E), Mumbai"
                  area="2200 sq.ft."
              />
              <ProjectView
                  name="Bluestar Thane Services Facility"
                  imgMain={BLUESTAR}
                  img1={BLUE1}
                  img2={BLUE2}
                  img3={BLUE3}
                  img4={BLUE4}
                  client="Bluestar Ltd."
                  address="Thane(W)"
                  area="6000 sq.ft."
              />
              <ProjectView
                  name="Worli Village Master Plan"
                  imgMain={WORLI}
                  img1={WORLI}
                  img2={WIMG1}
                  img3={WIMG2}
                  client=""
                  address="Worli, Mumbai"
                  area="22.25 Ha"
              />
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Projects;