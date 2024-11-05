import React, { PureComponent, useEffect, useState } from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useDocumentTitle from './Hooks/Hook';

const Statistics = () => {

  useDocumentTitle("Statistics | Gadget Heaven");

    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]); 

    return (
        <>
        <div className="bg-[#9538E2] text-center py-5 lg:py-16">
            <div className="lg:w-2/3 mx-auto text-white space-y-5">
                <h1 className="text-3xl lg:text-5xl font-bold">Statistics</h1>
                <p className="text-sm lg:text-base px-5 lg:px-60">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
        <div className="max-w-screen-2xl mx-auto py-10">
            <h1 className='font-bold text-2xl px-5'>Statistics</h1>

            <ResponsiveContainer
              className="mt-10 w-full rounded-xl bg-base-100"
              height={500}
            >
              <ComposedChart
                className="w-full"
                height={500}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                <XAxis dataKey="product_title" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" barSize={40} fill="#9538E2" />
                <Line type="bump" dataKey="rating" stroke="#FF0000" />
              </ComposedChart>
            </ResponsiveContainer>
        </div>
        </>
    );
};

export default Statistics;