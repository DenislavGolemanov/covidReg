const url = 'https://api.covid19api.com/summary'
const countryPosition = 25

const services = {

    getInfo: () => {

        return fetch(url)
            .then(res=> res.json())
            .then((resp)=> {
                
                let {Date , TotalConfirmed , TotalDeaths , TotalRecovered} = resp.Countries[countryPosition]
                
                let date = Date.split('T')[0]
                                .split('-')
                                .reverse()
                                .join('.')

                return {
                    date,
                    confirmed: TotalConfirmed,
                    deaths: TotalDeaths,
                    recovered: TotalRecovered,
                }


                
            })
            .catch(err => console.log(err))
    }
}

export default services