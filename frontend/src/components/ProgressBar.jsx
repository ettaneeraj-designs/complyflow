function ProgressBar({ tasks }) {

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status === "Completed"
    ).length;

  const percentage =

    tasks.length === 0

      ? 0

      :

      Math.round(
        (
          completedTasks /
          tasks.length
        ) * 100
      );

  return (

    <div style={{
      background: "white",
      padding: "25px",
      borderRadius: "20px",
      marginBottom: "30px"
    }}>

      <div style={{
        display: "flex",

        justifyContent:
          "space-between",

        marginBottom: "10px"
      }}>

        <h3>Task Completion</h3>

        <h3>
          {percentage}%
        </h3>

      </div>

      <div style={{
        width: "100%",
        height: "18px",
        background: "#e5e7eb",
        borderRadius: "20px",
        overflow: "hidden"
      }}>

        <div style={{
          width: `${percentage}%`,
          height: "100%",
          background: "#16a34a",
          transition:
            "0.3s ease"
        }} />

      </div>

    </div>

  );

}

export default ProgressBar;