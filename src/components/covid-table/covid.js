import "./covid.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment'
const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format("DD/MM/YYYY");
                        return item
                    })
                }
                setDataCovid(data)
            }
            catch (error) {
                console.error(error);
            }
        }
        getData()
    }, [])
    return (
        <>
            <h3>Covid Tracking IN vietnam</h3>
            < table >
                <thead>
                    <tr>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Country</th>
                        <th>CountryCode</th>
                        <th>Deaths</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Active}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Country}</td>
                                    <td>{item.CountryCode}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Date}</td>
                                </tr>

                            )
                        })}




                </tbody>

            </table >
        </>

    )
};

export default Covid