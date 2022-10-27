import React, { useEffect, useState } from 'react';
import './myStyle1.css'

import {toxicityQuery2} from '../common-services/toxicityquery-service.ts'


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
      

    const [toxicities, setToxicities] = useState(null);

    async function handleSearch () {

        const mol = window.JSDraw.get("test").getMolfile()

        const {toxicities: toxs} = await toxicityQuery2(mol)

        setToxicities(toxs)
    }       


    return ( 

        <div className="main-stack">


            <div className="JSDraw" id="test" skin="w8"></div>   

            <button onClick={handleSearch}>Toxicity Search</button>      

            {
                toxicities && (
                    <>
                    <h2>Results</h2>
                    <ul>

                    {toxicities.map(tox =>
                            <li>
                                {toxicities}
                            </li>
                        )
                    }
        
                    </ul>
                    </>
                )
            }
           
        </div>
    );
}

export default JsDraw1;