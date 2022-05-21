import React, { useEffect, useState } from "react";
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';

const endpoint = 'http://localhost:1337/api';

export default function Home() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        getAllPersons();
    }, []);

    const getAllPersons = async () => {
        const response = await axios.get(`${endpoint}/persons`)
        setPerson(response.data.data)
        console.log(response.data.data)
    }

    const deletePerson = async (id) => {
        await axios.delete(`${endpoint}/persons/${id}`)
        getAllPersons();
    }

    return (
        <div className="app">
            <Navbar />

            <div className="container mt-5">
                <Link href="/Persons/addPerson">
                    <a className="btn btn-primary m-3">New</a>
                </Link>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>LASTNAME</th>
                            <th>AGE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {person.map((person, index) => (
                            <tr key={person.id} isEven={(index + 1) % 2 === 0}>
                                <th>{person.id}</th>
                                <td>{person.attributes.name}</td>
                                <td>{person.attributes.lastName}</td>
                                <td>{person.attributes.age}</td>
                                <td>
                                    <Link href={`/Persons/[id]`} as={`/Persons/${person.id}`}>
                                        <a className='btn btn-warning m-3'>Edit</a>
                                    </Link>

                                    <button onClick={() => deletePerson(person.id)} className='btn btn-danger'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
