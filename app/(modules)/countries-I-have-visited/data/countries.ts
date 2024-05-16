export interface Country {
    id: number,
    name: string,
    posix: number[]
}

export const countriesVisitedList: Country[] = [{
    id: 1,
    name: "Colombia",
    posix: [4.79029, -75.69003]
}, {
    id: 2,
    name: "Panama",
    posix: [8.98238, -79.51987]
}, {
    id: 3,
    name: "Guatemala",
    posix: [14.63491, -90.50688]
}]

export const SELECTED_VISITED_COUNTRY_INITIAL_STATE: Country = {
    id: 1,
    name: "Colombia",
    posix: [4.79029, -75.69003]
}