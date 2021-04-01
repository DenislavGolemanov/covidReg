const baseUrl = 'http://localhost:5000/client'

export const getCities = () => {


    let citiesUrl = baseUrl + '/citiesNames'

    return fetch(citiesUrl)
        .then((res) => res.json())
        ///Formating here eventually
        // .then((json) => console.log(json))
}

export const getCityHospitals = (cityName) => {


    let hospitals = baseUrl + `/${cityName}/hospitals`

    return fetch(hospitals)
        .then((res) => res.json())

}




