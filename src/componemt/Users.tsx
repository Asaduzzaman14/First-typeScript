import React, { FC } from 'react';
import User from './User';


interface Props {
    name: string,
    age: number,
    addUser(): void

}

const Users: FC<Props> = ({ name, age }) => {
    return (
        <div>
            <h2>Name: {name} expriance with{age}</h2>
        </div>
    );
};

export default Users;