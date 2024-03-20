export interface PositionT{
    lat:number;
    lng:number;
  }
export  interface CityObjectT{
    cityName: string;
    country: string;
    emoji:string;
    date:string,
    notes:string,
    position:PositionT
  }