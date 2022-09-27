import { predictMolsSdfUrl } from "./api-urls";

interface Result {
   toxicities: number[];
}

interface ServerResponse {
   toxicityLevels: number[];
}

// interface DummyResult {
//    toxicityDummy: number[0.8, 2, 3];
// }

export async function toxicityQuery(molsSdf: string): Promise<Result>
{
   const resp = await
      fetch(predictMolsSdfUrl(), {
         method: "POST",
         headers: {'Content-Type': 'text/plain'},
         body: molsSdf
      });

   const respdata = <ServerResponse> (await resp.json());
   
   return {toxicities: respdata.toxicityLevels};   
}





// export async function toxicityQuery2(molsSdf: string): Promise<DummyResult>

// {
   
//    const usersResponse = await fetch(`${apiUrl}/users`);
//    const usersData = await usersResponse.json();

//    console.log(usersData);
   
//    return {toxicityDummy}; 
   
   
   
   
   
//    // 'dummy promise; dummy results; async await; return an array of result; return as dummy; as if toxicity results works & show the results with multiple toxicity'
   
//    // "Return javascript object; async keywords help; how to use this function and show results in the app; call service and show the results; how to show the results from the server"


// }

