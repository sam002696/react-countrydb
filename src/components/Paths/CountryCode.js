import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryCode = () => {
    const { countryCode } = useParams();
    const [countryId, setCountryId] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(res => res.json())
            .then(data => setCountryId(data[0]));
    }, [countryCode])
    const { name, flags, borders, population, region, capital } = countryId;
    return (
        <div>
            <div>
                <h1 className="font-serif mt-10 mx-auto pb-10 text-5xl text-center border-b-4 w-2/4"><span className="font-extrabold text-red-600">Your Country</span> Details</h1>
            </div>
            <div>
                {countryId.length === 0 ? <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                    <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                    <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                </div> :
                    <div className="mt-20 mx-auto overflow-hidden rounded shadow-lg w-1/3 mb-10">
                        <img className="w-full" src={flags?.svg} alt="country flag"></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{name?.official}</div>
                            <p className="text-gray-700 text-base line-clamp-4 hover:line-clamp-none">
                                {name?.common}
                            </p>
                            <p className="text-gray-700 text-base line-clamp-4 hover:line-clamp-none">
                                {capital}
                            </p>
                            <p className="text-gray-700 text-base line-clamp-4 hover:line-clamp-none">
                                {population}
                            </p>
                            <p className="text-gray-700 text-base line-clamp-4 hover:line-clamp-none">
                                {region}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{borders?.[0]}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{borders?.[1]}</span>
                        </div>
                    </div>
                }
            </div >
        </div>
    );
};

export default CountryCode;