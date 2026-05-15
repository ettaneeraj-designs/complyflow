function UploadSection({
  setSelectedFile,
  uploadFile,
}) {

  return (

    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "20px",
      marginBottom: "30px"
    }}>

      <h2>Upload Document</h2>

      <div style={{
        marginTop: "20px"
      }}>

        <input
          type="file"

          onChange={(e) =>
            setSelectedFile(
              e.target.files[0]
            )
          }
        />

        <button
          onClick={uploadFile}

          style={{
            marginLeft: "10px"
          }}
        >
          Upload
        </button>

      </div>

    </div>

  );

}

export default UploadSection;