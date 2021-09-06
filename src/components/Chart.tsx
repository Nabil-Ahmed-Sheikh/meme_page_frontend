import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import axios from 'axios';

const Chart = () => {


    const [stats, setStats] = useState([])
    useEffect( () => {
        async function fetchStats() {
            const { data } = await axios.get(`https://meme-page-headless-tech-ltd.herokuapp.com/api/meme/stats`)
            setStats(data);
        }
        fetchStats();
    }, [])

    

    return (
        <Container className='chart'>
            <h6>Memes uploaded per day, Last 7 days</h6>
            
            <BarChart width={730} height={250} data={stats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uploaded" fill="#8884d8" />
            </BarChart>
            
        </Container>
        
    )
}

export default Chart
