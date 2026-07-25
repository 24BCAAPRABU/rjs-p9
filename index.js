function StudentCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Reg No:</b> {props.regno}</p>
          <p><b>Department:</b> {props.department}</p>
          <p><b>Marks:</b> {props.marks}</p>
        </div>
      </div>
    </div>
  );
}

// Create the React Root.
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render three StudentCard components.
root.render(
  <div className="container mt-4">
    <div className="row">

      <StudentCard
        image="image1.jpg"
        name="sibi"
        regno="11"
        department="BCA"
        marks="34"
      />

      <StudentCard
        image="image2.jpg"
        name="Harish"
        regno="37"
        department="BCA"
        marks="99"
      />

      <StudentCard
        image="image3.jpg"
        name="dhilli"
        regno="30"
        department="BCA"
        marks="95"
      />
        <StudentCard
        image="image4.jpg"
        name="prabu"
        regno="31"
        department="BCA"
        marks="101"
      />

    </div>
  </div>
);