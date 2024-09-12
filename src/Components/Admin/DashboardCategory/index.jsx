import React from 'react'
import '../DashboardCategory/style.css'
function DashboardCategory() {

    console.log("test")
  return (
    <>
      <section className="categoryBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0">
              <div className="category_table"><h1>TABLE Category</h1></div>
            </div>
            <div className="col-3 p-0">
              <div className="category_table"><h1>FORM Category</h1></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardCategory
