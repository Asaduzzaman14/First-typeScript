import React, { FC } from 'react';
import Users from './Users';

const User = () => {

    const handelUser = (): void => {

    }
    return (
        <div>
            <Users name='asad' age={21} addUser={handelUser}></Users>
        </div>
    );
};

export default User;