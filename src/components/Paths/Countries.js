import React, { useEffect, useState } from 'react';
import CountriesStyle from '../StylingJS/CountriesStyle';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])
    console.log(countries);
    return (
        <div> {countries.length === 0 ? <div className="flex items-center justify-center space-x-2 animate-bounce m-10">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
        </div> : <div className="grid lg:grid-cols-3 p-36 gap-8">
            {
                countries.map(country => <CountriesStyle country={country} key={country.cca2}></CountriesStyle>)
            }
        </div>}
            {/* <div className="bg-white flex m-10 mx-auto p-4 ring-4 ring-gray-400 rounded-full shadow w-2/4">
                <input onChange={setName} className="w-full rounded p-2 outline-none" type="text" placeholder="Try 'Bangladesh'"></input>
                <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                    <p className="font-semibold text-xs">Search</p>
                </button>
            </div> */}


            {/* <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    countries.map(country => <CountriesStyle country={country} key={country.cca2}></CountriesStyle>)
                }
            </div> */}
        </div>
    );
};

export default Countries;