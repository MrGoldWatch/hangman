const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get Puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
            const data = await response.json()
            return country = data.find((c) => c.alpha2Code === countryCode)
    } else {
            throw new Error('unable to fetch data getCountry')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=16004032faa69a')
        
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('getLocation erorred out')
    }
}

const getCurrentCountry = async () => {
    const response = await getLocation()
    return getCountry(response.country)
}

export { getPuzzle as default }