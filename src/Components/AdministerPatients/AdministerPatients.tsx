import { gql, useQuery } from '@apollo/client'
import AddAdministerPatient from './AddAdministerPatient/AddAdministerPatient'
import AdministerPatientCard from './AdministerPatientCard/AdministerPatientCard'
import { useState } from 'react'
const FETCH_ADMINISTER_PATIENTS = gql`
query{
    administerPatients{
      id nameofthepatient dateofbirth vaccination dateadministered brandname givenat 
    }
}`

const AdministerPatients = () => {
  const { error, loading, data } = useQuery(FETCH_ADMINISTER_PATIENTS)
  const [showForm, setShowForm] = useState<boolean>(false);

  if (error) return <h4> Something went wrong </h4>
  if (loading) return <h4> Loading... </h4>


  const onAddData = () => {
    setShowForm(false)
  }
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <button className='btn btn-primary btn-block offset-2 col-7' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        <hr />
        {showForm && <AddAdministerPatient onAddData={onAddData} />}
        <hr/>
      </div>
      <div className="col-12">
        <AdministerPatientCard />
      </div>
    </div>
  )
}

export default AdministerPatients