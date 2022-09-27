import React, { useEffect, useState } from 'react';
import {Button}  from 'react-bootstrap';
import './myStyle1.css'
import '../common-services/toxicityquery-service.ts'

function JsDraw1() {

    const [jsDrawInitialized, setJsDrawInitialized] = useState (false);



    useEffect(() => {
        if  (!jsDrawInitialized) {
            window.onload = function () {
                window.JSDraw.init();
            };
            setJsDrawInitialized(true)
        }
      }, [jsDrawInitialized]);


    // function handleSearch () {
    //     alert("Insert Molfile")
    // }

    function handleSearch () {

        const mol = window.JSDraw.get("test").getMolfile()

        console.log(mol)
    }

      
    

        
        

    return ( 

        <div className="flexbox-container">

            {/* <div className='Primary'>Helloo!!</div> */}

            <div className="flexbox-item1">

                <div className="JSDraw" id="test" skin="w8" >

                </div>   

                {/* style="width: 660px; height: 300px;border:1px solid gray" */}
    
            </div>

            {/* <input value={molfile} onChange={e => setMolFile(e.target.value)}/> */}


            {/* <button onClick={handleSearch}>Toxicity Search</button> */}

            <div className="flexbox-item2">

                <Button onClick={handleSearch}>Toxicity Search</Button> 

            </div>
        

        </div>


    );
}

export default JsDraw1;