import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts'

import { first, last } from 'lodash'

const TrendWidget = ({ title, series }) => {
  const yMin = first(series || [])?.value || 0
  const yMax = last(series || [])?.value || 0

  return (
    <div className="bg-gray-200 p-3 rounded-lg col-span-2 flex">
      <div className="w-1/3">
        <div className="text-gray-600 text-sm whitespace-nowrap">{title}</div>
        <div className="text-3xl font-medium my-1.5 tracking-tighter">
          {yMax.toLocaleString()}
        </div>
        <div className="text-green-500 text-sm font-medium">
          +{(yMax - yMin).toLocaleString()}
        </div>
      </div>
      <div className="w-full p-4 pr-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={series}>
            <YAxis hide domain={[yMin, yMax]} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#474DFF"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="absolute right-4 bottom-0 text-gray-550 text-xs">
          30 Day Trend
        </div>
      </div>
    </div>
  )
}

export default TrendWidget