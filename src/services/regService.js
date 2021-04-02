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


export const getHospitalAvailability = (cityName , selectedHospital) => {


    let availability = baseUrl + `/${cityName}/${selectedHospital}`


    return fetch(availability)
        .then((res) => res.json())
        // .then((json) => console.log(json))
        // .then((json) => [json])

}




