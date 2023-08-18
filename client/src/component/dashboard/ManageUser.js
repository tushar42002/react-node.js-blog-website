import React from 'react'

const ManageUser = () => {
    return (
        <main>
                <h2>Manage Users</h2>
            <table>
                <thead>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Username</b></td>
                        <td><b>Admin</b></td>
                        <td><b>Edit</b></td>
                        <td><b>Delete</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>tester</td>
                        <td>test@gmail.com</td>
                        <td>NO</td>
                        <td><a href="edit-user.php?userid='. $user_id .'" className="btn sm">Edit</a></td>
                        <td><a href="delete-user.php?userid='. $user_id .'" className="btn sm danger">Delete</a></td>
                    </tr>

                </tbody>
            </table>
        </main>
    )
}

export default ManageUser