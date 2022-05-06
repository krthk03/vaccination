import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <div className="container">
            <div className="card">
                <h1 className="text-center card-header">Vaccination App</h1>
                <div className="row ">
                    <div className="col-4 card-body">
                        <ul>
                            <li>
                                <Link to="/patients"><h6>Add New Patients</h6></Link>
                            </li>
                            <li>
                                <Link to="/administerPatients"><h6>Administer Vaccination</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )

}

export default HomePage;