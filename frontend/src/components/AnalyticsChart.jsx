import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart({
  chartData,
  COLORS,
}) {

  return (

    <div style={{
      background: "white",
      padding: "25px",
      borderRadius: "20px",
      marginBottom: "30px"
    }}>

      <h2 style={{
        marginBottom: "20px"
      }}>
        Task Analytics
      </h2>

      <div style={{
        width: "100%",
        height: "350px"
      }}>

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >

              {chartData.map((entry, index) => (

                <Cell
                  key={`cell-${index}`}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default AnalyticsChart;