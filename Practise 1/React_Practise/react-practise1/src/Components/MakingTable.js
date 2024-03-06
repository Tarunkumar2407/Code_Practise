import React from 'react'

const MakingTable = () => {
    const students = [
        {name: "Tarun", email: "tarun@gmail.com", contact: 666},
        {name: "Ankur", email: "ankur@gmail.com", contact: 999},
        {name: "Sumer", email: "sumer@gmail.com", contact: 777}
    ]
  return (
    <div>
      <h3>Making Table With Array of Objects</h3>
      <table>
        <thead>
                <tr>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
        </thead>
        <tbody>
            {
                students.map((item, index) => (
                   <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                   </tr>
                ))
            }
                
        </tbody>
      </table>
    </div>
  )
}

export default MakingTable
