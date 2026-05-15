function StatsCards({ tasks }) {

  const totalTasks =
    tasks.length;

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status === "Completed"
    ).length;

  const pendingTasks =
    tasks.filter(
      (task) =>
        task.status !== "Completed"
    ).length;

  const overdueTasks =
    tasks.filter(

      (task) =>

        new Date(task.dueDate)
        <
        new Date()

        &&

        task.status !== "Completed"

    ).length;

  const cards = [

    {
      title: "Total Tasks",
      value: totalTasks,
      color: "#2563eb",
    },

    {
      title: "Completed",
      value: completedTasks,
      color: "#16a34a",
    },

    {
      title: "Pending",
      value: pendingTasks,
      color: "#f59e0b",
    },

    {
      title: "Overdue",
      value: overdueTasks,
      color: "#dc2626",
    },

  ];

  return (

    <div style={{
      display: "grid",

      gridTemplateColumns:
        "repeat(auto-fit, minmax(220px, 1fr))",

      gap: "20px",

      marginBottom: "30px"
    }}>

      {cards.map((card) => (

        <div

          key={card.title}

          style={{
            background: "white",

            padding: "25px",

            borderRadius: "20px",

            borderLeft:
              `8px solid ${card.color}`,

            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)"
          }}
        >

          <h3 style={{
            color: "gray",
            marginBottom: "10px"
          }}>
            {card.title}
          </h3>

          <h1 style={{
            fontSize: "36px",
            color: card.color
          }}>
            {card.value}
          </h1>

        </div>

      ))}

    </div>

  );

}

export default StatsCards;