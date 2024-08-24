import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DAXDrawdownData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://market-crash.onrender.com/getDax1DayDrawdownEF2_2_1_1_TaData'); // Updated endpoint
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p>DAX 1 Day Drawdown Data</p>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Closed Price</th>
                        <th>Return Of DAX</th>
                        <th>Direction Of DAX</th>
                        <th>Crash Indicator DAX 10</th>
                        <th>Drawdown</th>
                        <th>Error (m=1)</th>
                        <th>Predicted Drawdown (m=1)</th>
                        <th>Target Drawdown (m=1)</th>
                        <th>Error (m=2)</th>
                        <th>Predicted Drawdown (m=2)</th>
                        <th>Target Drawdown (m=2)</th>
                        <th>Error (m=3)</th>
                        <th>Predicted Drawdown (m=3)</th>
                        <th>Target Drawdown (m=3)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.no_}</td>
                            <td>{item.date}</td>
                            <td>{item.time ? item.time : 'N/A'}</td>
                            <td>{item.closedPrice}</td>
                            <td>{item.ReturnOfDax}</td>
                            <td>{item.directionOfDax}</td>
                            <td>{item.CrashIndicatorDax_10__}</td>
                            <td>{item.drawdown}</td>
                            <td>{item.error_m_1_}</td>
                            <td>{item.PredictedDrawdown_m_1_}</td>
                            <td>{item.TargetDrawdown_m_1_}</td>
                            <td>{item.error_m_2_}</td>
                            <td>{item.PredictedDrawdown_m_2_}</td>
                            <td>{item.TargetDrawdown_m_2_}</td>
                            <td>{item.error_m_3_}</td>
                            <td>{item.PredictedDrawdown_m_3_}</td>
                            <td>{item.TargetDrawdown_m_3__1}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DAXDrawdownData;
