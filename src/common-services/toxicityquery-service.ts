// import { predictMolsSdfUrl } from "./api-urls";


// interface DummyResult {
//    toxicityDummy: 0.8;
// }

// export async function toxicityQuery(molsSdf: string): Promise<Result>
// {
//    const resp = await
//       fetch(predictMolsSdfUrl(), {
//          method: "POST",
//          headers: {'Content-Type': 'text/plain'},
//          body: molsSdf
//       });

//    const respdata = <ServerResponse> (await resp.json());
   
//    return {toxicities: respdata.toxicityLevels};   
// }



// export async function toxicityQuery2(molsSdf: string) {

//    const resp = await fetch(predictMolsSdfUrl(), {
//        method: 'POST',
//        headers: {'Content-Type': 'text/plain'},
//        body: molsSdf
//      })

//    // console.log(resp)

//    return await resp.text();

   

// }


interface Result {
   toxicities: number[];
}

// interface ServerResponse {
//    toxicityLevels: number[];
// }


export async function toxicityQuery2(molsSdf: string): Promise<Result>

{
   
   return  {toxicities: [0.1]}  
   
}

