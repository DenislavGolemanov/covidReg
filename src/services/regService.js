const baseUrl = 'http://localhost:5000/client'

export const getCities = () => {


    let citiesUrl = baseUrl + '/citiesNames'

    return fetch(citiesUrl)
        .then((res) => res.json())
        // .then((json) => console.log(json))
}


