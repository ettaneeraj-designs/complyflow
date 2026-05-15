function Sidebar({ tasks = [] }) {

  const totalTasks =
    tasks.length;

  const pendingTasks =
    tasks.filter(
      (task) =>
        task.status === "Pending"
    ).length;

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status === "Completed"
    ).length;

  const atRiskTasks =
    tasks.filter(
      (task) =>
        task.status === "At Risk"
    ).length;

  return (

    <div style={{
      width: "260px",

      background: "#111827",

      color: "white",

      minHeight: "100vh",

      padding: "30px",
    }}>

      <h2 style={{
        marginBottom: "40px",
        fontSize: "28px"
      }}>
        ComplyFlow
      </h2>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>

        <div style={{
          background: "#1f2937",
          padding: "15px",
          borderRadius: "12px"
        }}>

          <h3>Total Tasks</h3>

          <p style={{
            fontSize: "28px",
            fontWeight: "bold"
          }}>
            {totalTasks}
          </p>

        </div>

        <div style={{
          background: "#f59e0b",
          padding: "15px",
          borderRadius: "12px",
          color: "white"
        }}>

          <h3>Pending</h3>

          <p style={{
            fontSize: "28px",
            fontWeight: "bold"
          }}>
            {pendingTasks}
          </p>

        </div>

        <div style={{
          background: "green",
          padding: "15px",
          borderRadius: "12px"
        }}>

          <h3>Completed</h3>

          <p style={{
            fontSize: "28px",
            fontWeight: "bold"
          }}>
            {completedTasks}
          </p>

        </div>

        <div style={{
          background: "red",
          padding: "15px",
          borderRadius: "12px"
        }}>

          <h3>At Risk</h3>

          <p style={{
            fontSize: "28px",
            fontWeight: "bold"
          }}>
            {atRiskTasks}
          </p>

        </div>

      </div>

    </div>

  );

}

export default Sidebar;