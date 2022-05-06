import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

const FETCH_CARD = gql`
query{
    administerPatients{
      nameofthepatient dateofbirth vaccination dateadministered brandname givenat
    }
  }
`

const AdministerPatientCard = () => {

    const { data } = useQuery(FETCH_CARD)

    return (
        <div className="container">
            <div className="col-12">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Date of Birth</th>
                            <th>Vaccination</th>
                            <th>Brand Name</th>
                            <th>Date Administered</th>
                            <th>Given At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {data.administerPatients.map((administerPatient: any) => (
                                    <option key={administerPatient.id} value={administerPatient.nameofthepatient}>
                                        {administerPatient.nameofthepatient}
                                    </option>
                                ))}
                            </td>
                            <td>
                                {data.administerPatients.map((administerPatient: any) => (
                                    <option key={administerPatient.id} value={administerPatient.dateofbirth}>
                                        {administerPatient.dateofbirth}
                                    </option>
                                ))}
                            </td>
                            <td>
                                {data.administerPatients.map((administerPatient: any) => (
                                    <option key={administerPatient.id} value={administerPatient.vaccination}>
                                        {administerPatient.vaccination}
                                    </option>
                                ))}
                            </td>

                            <td>
                                {data.administerPatients.map((administerPatient: any) => (
                                    <option key={administerPatient.id} value={administerPatient.brandname}>
                                        {administerPatient.brandname}
                                    </option>
                                ))}
                            </td>
                            <td>
                                {data.administerPatients.map((administerPatient: any) => (
                                    <option key={administerPatient.id} value={administerPatient.dateadministered}>
                                        {administerPatient.dateadministered}
                                    </option>
                                ))}
                            </td>
                            <td>
                                {data.administerPatients.map((administerPatient: any) => (
                                    <option key={administerPatient.id} value={administerPatient.givenat}>
                                        {administerPatient.givenat}
                                    </option>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AdministerPatientCard;