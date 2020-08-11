import React from "react";

function Columns({filteredUsers}) {

    return (
        <tbody>
          {filteredUsers[0] !== undefined && filteredUsers[0].name !== undefined ? (
            filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
              return (
                <tr key={login.uuid}>
                  <td data-th="Image">
                    <img
                      src={picture.medium}
                      alt={"profile image for " + name.first + " " + name.last}
                      className="img-responsive"
                    />
                  </td>
                  <td data-th="Name">
                        {name.first} {name.last}    
                  </td>
                  <td data-th="Phone">
                    {phone}
                  </td>
                  <td data-th="Email">
                    <a href={"mailto:" + email} target="__blank">
                      {email}
                    </a>
                  </td>
                  <td data-th="Birthday">
                     {dob.date.split("T")[0]}
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      );

}

export default Columns;