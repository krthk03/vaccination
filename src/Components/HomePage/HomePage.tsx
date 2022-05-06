import { Link } from "react-router-dom";
const HomePage = () => {

    return (
        <div>
            <div className="card bg-dark">
                <br />
                <p className="display-4 text-center font-weight-bold" style={{ color: "greenyellow" }}>VACCINATION</p>
                <h4 className="text-white text-center">Trust science, help each other, respect the rules, and get Vaccinated.</h4>
                <br />
                <div className="row text-center">
                    <div className="row col-8 offset-3">
                        <Link to="/patients"><h6 className=" btn btn-outline-primary">Add New Patients</h6></Link>
                        <Link className="col-4 offset-4" to="/administerPatients"><h6 className=" btn btn-outline-primary">Administer Vaccination</h6></Link>
                        <div />
                        <div className="col-4 offset-6">
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
            <hr />
        </div>
    )

}

export default HomePage;