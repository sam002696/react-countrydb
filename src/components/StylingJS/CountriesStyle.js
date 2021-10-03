import React from 'react';
import { useHistory } from "react-router-dom";
const CountriesStyle = (props) => {
    let history = useHistory();
    const handleClick = () => {
        history.push(`/country/${cca2}`);
    }
    const { name, flags, cca2 } = props.country;
    return (
        <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">
            <img className="rounded-t-xl  w-full h-36 object-cover" src={flags.svg} alt="" ></img>
            <div className="flex flex-col p-7">
                <div className="flex flex-row">
                    <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                        {name.official}
                    </div>
                </div>

                {/* <p className="text-base text-gray-600 mt-1 line-clamp-1 hover:line-clamp-none">
                    {capital}
                </p> */}
                <div>
                    <button onClick={handleClick} className="bg-white border border-gray-400 font-semibold hover:bg-gray-100 mt-4 px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountriesStyle;