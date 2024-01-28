const getStatus = (status) => {
  switch (status) {
    case "important":
      return <span className="badge bg-warning">Important</span>;
    case "job":
      return <span className="badge bg-info">Job</span>;
    case "daily":
      return <span className="badge bg-success">Daily</span>;
    default:
      return <span className="badge bg-secondry">Select</span>;
  }
};

export default getStatus;
