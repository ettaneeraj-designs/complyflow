function RecentActivity({
  tasks = []
}) {

  const recentTasks =
    [...tasks]

      .reverse()

      .slice(0, 5);

  return (

    <div style={{
      background: "white",

      padding: "25px",

      borderRadius: "20px",

      marginTop: "30px",
    }}>

      <h2 style={{
        marginBottom: "20px"
      }}>
        Recent Activity
      </h2>

      {

        recentTasks.length === 0

        ? (

          <p style={{
            color: "gray"
          }}>
            No recent activity
          </p>

        )

        : (

          recentTasks.map((task) => (

            <div

              key={task._id}

              style={{
                padding: "15px 0",

                borderBottom:
                  "1px solid #eee"
              }}
            >

              <p style={{
                marginBottom: "5px"
              }}>

                <strong>
                  {task.title}
                </strong>

              </p>

              <p style={{
                color: "gray",
                fontSize: "14px"
              }}>

                Status:
                {" "}
                {task.status}

              </p>

            </div>

          ))

        )

      }

    </div>

  );

}

export default RecentActivity;