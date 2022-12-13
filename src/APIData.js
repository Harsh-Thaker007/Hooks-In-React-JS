import React, { useEffect, useState } from 'react';

const APIData = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <h1>COVID 19 DASH BOARD</h1>
            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recoverd</th>
                        <th>Deaths</th>
                        <th>Updates</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.dailydeceased}</td>
                                    <td>{curElem.dailyconfirmed}</td>
                                    <td>{curElem.dailyrecoverd}</td>
                                    <td>{curElem.date}</td>
                                    <td>{curElem.dateymd}</td>
                                    <td>{curElem.totalrecovered}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default APIData;