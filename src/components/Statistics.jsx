import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {

    const data = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
        },
      ];


    return (
        <>
        <div className="bg-[#9538E2] text-center py-16">
            <div className="w-2/3 mx-auto text-white space-y-5">
                <h1 className="text-5xl font-bold">Statistics</h1>
                <p className="px-60">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
        <div className="max-w-screen-2xl mx-auto py-10">
            <h1 className='font-bold text-2xl'>Statistics</h1>

            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
                <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
        </>
    );
};

export default Statistics;