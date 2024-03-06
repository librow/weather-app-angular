// import { Ingredient } from "../shared/ingredient.model";

// export class Realtime {
//     // public name: string;
//     // public description: string;
//     // public imagePath: string;
//     // public ingredients: Ingredient[];
//     public data: {
//         time: string,
//         values: {
//             cloudBase: number,
//             cloudCeiling: number,
//             cloudCover: number,
//             dewPoint: number,
//             freezingRainIntensity: number,
//             humidity: number,
//             precipitationProbability: number,
//             pressureSurfaceLevel: number,
//             rainIntensity: number,
//             sleetIntensity: number,
//             snowIntensity: number,
//             temperature: number,
//             temperatureApparent: number,
//             uvHealthConcern: number,
//             uvIndex: number,
//             visibility: number,
//             weatherCode: number,
//             windDirection: number,
//             windGust: number,
//             windSpeed: number
//         }
//     };
//     public location: {
//         lat: string,
//         lon: string,
//         name: string,
//         type: string
//     };
    
//     // constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
//     constructor(data: object, location: object) {
//         this.data = data;
//         this.location = location;
//     }
// }