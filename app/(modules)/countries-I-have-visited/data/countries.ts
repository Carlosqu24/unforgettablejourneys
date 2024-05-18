export interface Country {
    id: number,
    name: string,
    posix: number[]
}

export const countriesVisitedList: Country[] = [{
    id: 1,
    name: "Costa Rica 🇨🇷",
    posix: [9.63, -84.25]
}, {
    id: 2,
    name: "United States 🇺🇸",
    posix: [44.50, -89.50]
}, {
    id: 3,
    name: "Panama 🇵🇦",
    posix: [8.53, -80.78]
}]

export const SELECTED_VISITED_COUNTRY_INITIAL_STATE: Country = {
    id: 1,
    name: "Costa Rica 🇨🇷",
    posix: [9.63, -84.25]
}