export interface dataservice {
    filter(arg0: (x: any) => boolean): dataservice;  
    active : number;  
    confirmed: number;  
    deaths: number;  
    deltaconfirmed: number;  
    deltadeaths: number;  
    deltarecovered: number;  
    lastupdatedtime: string;  
    migratedother: number;  
    recovered: number;  
    state: string;  
    statecode: string;  
}  
  
export interface Childdataservice {
    statecode: string;  
    id: string;  
    state: string;  
    districtData: Districtdataservice[];  
}  
  
export interface Districtdataservice {  
    confirmed: number;  
    id: string;  
    name: string;  
}  