import React from 'react'
import TableFixed from './common/TableFixed'
import TopBarCommon from './common/TopBarCommon'

const ManageUser = () => {
  return (
    <>
      <TopBarCommon heading='Manage User' />
      <TableFixed showRowPerPage='7' tableHeight='428' />
    </>
  )
}

export default ManageUser