// ** React Imports
import { Fragment } from 'react'

// ** Import Table
import TableNya from './Table'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Icons Imports

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'


const User = () => {
  return (
    <Fragment>
      <Breadcrumbs title='User' data={[{ title: 'Pages' }, { title: 'User' }]} />
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>User List</CardTitle>
        </CardHeader>
        <CardBody>
          <TableNya />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default User
