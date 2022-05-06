import { useMutation, gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const FETCH_PATIENT = gql`
query{
    patients{
       id patientname dateofbirth
    }
}
`
const CREATE_ADMINISTER_PATIENT_MUTATION = gql`
mutation onCreateAdministerPatientMutation (
     $nameofthepatient: String!
     $dateofbirth : String!
    $vaccination : String!
    $dateadministered : String!
    $brandname : String!
    $givenat : String!
    ){
    createAdministerPatient(data : {
        nameofthepatient : $nameofthepatient,
        dateofbirth : $dateofbirth,
        vaccination : $vaccination,
        dateadministered : $dateadministered,
        brandname : $brandname,
        givenat : $givenat 
    })
    {
      id,nameofthepatient, dateofbirth,vaccination, dateadministered, brandname, givenat
    }
  }
`
const AddAdministerPatient: React.FC<{ onAddData: () => void }> = (props) => {

    // const createAdministerPatientHandler = (event : React.FormEvent) => {}

    const [administerPatientState, setAdministerPatientState] = useState<{
        nameofthepatient: string,
        dateofbirth: string,
        vaccination: string,
        dateadministered: string,
        brandname: string,
        givenat: string
    }>({
        nameofthepatient: '',
        dateofbirth: '',
        vaccination: '',
        dateadministered: '',
        brandname: '',
        givenat: ''
    })

    const [createAdministerPatientCallback, { data: mutationData, error, loading }] = useMutation(CREATE_ADMINISTER_PATIENT_MUTATION, {
        variables: {
            nameofthepatient: '',
            dateofbirth: '',
            vaccination: '',
            dateadministered: '',
            brandname: '',
            givenat: ''
        }
    })

    const createAdministerPatientHandler = (event: React.FormEvent) => {
        event.preventDefault()
        createAdministerPatientCallback({
            variables: {
                nameofthepatient: administerPatientState.nameofthepatient,
                dateofbirth: administerPatientState.dateofbirth,
                vaccination: administerPatientState.vaccination,
                dateadministered: administerPatientState.dateadministered,
                brandname: administerPatientState.brandname,
                givenat: administerPatientState.givenat
            }
        }).then(res => {
            history.replace("/administerPatients")
            alert("Patients Details Validated and Saved in Database!")
            window.location.reload();
        }).catch(err => {
            alert("Enter Data in the Fields")
        })
    }

    const nameofthepatientChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = event => {
        setAdministerPatientState({ ...administerPatientState, nameofthepatient: event.target.value })
    }

    const dateofbirthChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = event => {
        setAdministerPatientState({ ...administerPatientState, dateofbirth: event.target.value })
    }

    const vaccinationChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = event => {
        setAdministerPatientState({ ...administerPatientState, vaccination: event.target.value })
    }

    const dateadministeredChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
        setAdministerPatientState({ ...administerPatientState, dateadministered: event.target.value })
    }

    const brandnameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
        setAdministerPatientState({ ...administerPatientState, brandname: event.target.value })
    }

    const givenatChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
        setAdministerPatientState({ ...administerPatientState, givenat: event.target.value })
    }

    const history = useHistory()
    const { data } = useQuery(FETCH_PATIENT)
    if (error) return <h4> Something went wrong </h4>
    // if(loading) return <h4> Loading... </h4>

    // const patientnameHandler = () =>{
    //     fetchPatientQuery({variables :{ patientname : patientnameInputRef.current?.value}})
    // }

    return (
        <div className="row">
            <div className="col-12 card">
                <div className="card-header" >
                    <h2 className="text-center"> Administer Vaccination </h2>
                </div>
                <form>

                    <label htmlFor="nameofthepatient" className="font-weight-bold"> Name of the Patient</label>
                    <select name="nameofthepatient" className="form-control" onChange={nameofthepatientChangeHandler}>
                        <option value="">Select Patient</option>
                        {data && data.patients && data.patients.map((patient: any) => (
                            <option key={patient.id} value={patient.patientname}>
                                {patient.patientname}
                            </option>
                        ))}
                    </select>


                    <label htmlFor="dateofbirth" className="font-weight-bold">Date of Birth</label>
                    <select name="dateofbirth" className="form-control" onChange={dateofbirthChangeHandler}>
                        <option value="">Select Date of Birth</option>
                        {data && data.patients && data.patients.map((patient: any) => (
                            <option key={patient.id} value={patient.dateofbirth}>
                                {patient.dateofbirth}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="vaccination" className="font-weight-bold">Vaccination</label>
                    {/* <input type="text" name="vaccination" className="form-control" value={administerPatientState.vaccination} onChange={vaccinationChangeHandler} /> */}

                    <select name="vaccination" className="form-control" onChange={vaccinationChangeHandler}>
                        <option value="">Select Dose</option>
                        <option value="1st Dose">1st Dose</option>
                        <option value="2nd dose">2nd Dose</option>
                    </select>

                    <label htmlFor="dateadministered" className="font-weight-bold">Date Administered</label>
                    <input type="date" name="dateadministered" className="form-control" value={administerPatientState.dateadministered} max="2022-05-05" min="2020-01-01" onChange={dateadministeredChangeHandler} />

                    <label htmlFor="brandname" className="font-weight-bold">Brand Name</label>
                    <input type="text" name="brandname" className="form-control" value={administerPatientState.brandname} onChange={brandnameChangeHandler} />

                    <label htmlFor="givenat" className="font-weight-bold">Given At</label>
                    <input type="text" name="givenat" className="form-control" value={administerPatientState.givenat} onChange={givenatChangeHandler} />

                    <br />
                    <button className="btn btn-outline-success" onClick={createAdministerPatientHandler}>Administer Patient</button>
                    <button className="btn btn-outline-danger offset-1" onClick={() => history.push('/')} >Cancel</button>

                </form>
                {data && mutationData}

            </div>
        </div>
    )

}

export default AddAdministerPatient