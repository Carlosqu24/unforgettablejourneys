export interface Country {
    id: number,
    name: string,
    posix: number[]
}

// export const countriesVisitedList: Country[] = [{
//     id: 1,
//     name: "Costa Rica 🇨🇷",
//     posix: [9.63, -84.25]
// }, {
//     id: 2,
//     name: "United States 🇺🇸",
//     posix: [44.50, -89.50]
// }, {
//     id: 3,
//     name: "Panama 🇵🇦",
//     posix: [8.53, -80.78]
// }]

export const countriesVisitedList: Country[] = [{
    id: 1,
    name: "Madison, Wisconsin, United States 🇺🇸",
    posix: [43.0731, -89.4012]
},
{
    id: 2,
    name: "Milwaukee, Wisconsin, United States 🇺🇸",
    posix: [43.0389, -87.9065]
},
{
    id: 3,
    name: "Chicago, Illinois, United States 🇺🇸",
    posix: [41.8781, -87.6298]
},
{
    id: 4,
    name: "New York City, New York, United States 🇺🇸",
    posix: [40.7128, -74.0060]
},
{
    id: 5,
    name: "Phillipsburg, New Jersey, United States 🇺🇸",
    posix: [40.6934, -75.1907]
},
{
    id: 6,
    name: "Orlando, Florida, United States 🇺🇸",
    posix: [28.5383, -81.3792]
},
{
    id: 7,
    name: "Miami, Florida, United States 🇺🇸",
    posix: [25.7617, -80.1918]
},
{
    id: 8,
    name: "San Jose, Costa Rica 🇨🇷",
    posix: [9.9281, -84.0907]
},
{
    id: 9,
    name: "Limón, Costa Rica 🇨🇷",
    posix: [9.9913, -83.0361]
},
{
    id: 10,
    name: "Alajuela, Costa Rica 🇨🇷",
    posix: [10.0162, -84.2116]
},
{
    id: 11,
    name: "Cartago, Costa Rica 🇨🇷",
    posix: [9.8644, -83.9194]
},
{
    id: 12,
    name: "Heredia, Costa Rica 🇨🇷",
    posix: [9.9986, -84.1165]
},
{
    id: 13,
    name: "Puntarenas, Costa Rica 🇨🇷",
    posix: [9.9763, -84.8384]
},
{
    id: 14,
    name: "David, Panama 🇵🇦",
    posix: [8.4333, -82.4333]
}]

export const SELECTED_VISITED_COUNTRY_INITIAL_STATE: Country = countriesVisitedList[0]