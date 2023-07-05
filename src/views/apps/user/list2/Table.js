import { Fragment, useEffect } from 'react'
// ** Store & Actions
import { getUser } from "../store"
import { useDispatch, useSelector } from "react-redux"


// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'

const TableNya = () => {
    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector((state) => state.users)

    useEffect(() => {
      dispatch(getUser())
    }, [dispatch])

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Filters</CardTitle>
        </CardHeader>
        <CardBody>
          <Table className="text-center text-nowrap" responsive bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>User Login</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>              {
              store.data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th>{index + 1}</th>
                    <th className='text-start'>{item.login}</th>
                    <td>{item.type}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default TableNya
