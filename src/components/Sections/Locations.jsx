import React from 'react'
import styled from "styled-components";
export default function Locations() {
  return (
    <div>

    <h2 style={{color: 'black', fontSize: '32px;', textAlign:'center'}}>Locations</h2>
<LocationsWrapper>
<div>Cardiff</div>
<div>Pontypridd</div>
<div>Caerphilly</div>
<div>Penarth</div>
<div>Barry</div>
<div>Newport</div>
<div>Radyr</div>
<div>St Mellons</div>
<div>Whitchurch</div>
<div>Dinas Powys</div>
<div>Rhiwbina</div>
<div>Tongwynlais</div>
<div>Cardiff Bay</div>
<div>Roath</div>
<div>Grangetown</div>
<div>Canton</div>
<div>Splott</div>
<div>Rumney</div>
<div>Heath</div>
<div>Llanishen</div>




    </LocationsWrapper>
    </div>
  )
}


const LocationsWrapper = styled.div`

display:grid;
grid-template-columns: repeat(4, 1fr);
align-items:center;
padding: 1.25rem;
height:auto;
font-size: 21px;
font-weight:bold;
color:white;
background-color:#0B093B;

@media (max-width: 768px) {
  
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */

}

`