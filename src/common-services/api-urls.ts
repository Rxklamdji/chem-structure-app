export function predictMolsSdfUrl(): string
{
   return apiUrl(`deep-dili/predict-sdf`)
}

/** Helper function for building api urls with or without query parameters.
 */
 function apiUrl(resource: string, queryParams: QueryParam[] = [])
 {
    const queryParamEqs =
       queryParams
       .filter(p => p.value != null)
       .map(p => `${encodeURIComponent(p.name)}=${encodeURIComponent(p.value || '')}`)
       .join('&');
 
    const queryPart = queryParamEqs.length > 0 ? `?${queryParamEqs}` : '';
 
    return `/${resource}${queryPart}`;
 }
 
 interface QueryParam
 {
    name: string,
    value: string | null
 }
 






