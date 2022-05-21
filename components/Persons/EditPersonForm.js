import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { ButtonSave } from "../../components/Buttons/Buttons";

const endpoint = 'http://localhost:1337/api/persons'

const EditPerson = (props) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const router = useRouter();

    const id = props.person;

    const editPerson = async (e) => {
        e.preventDefault()
        const send = await axios.put(endpoint + '/' + id, {
            data: {
                name: name,
                lastName: lastName,
                age: age
            }
        });

        if (send.status === 200) {
            router.back();
        }
    }

    const getPersonById = async () => {
        const response = await axios.get(endpoint + '/' + id);
        console.log(response)
        setName(response.data.data.attributes.name)
        setLastName(response.data.data.attributes.lastName)
        setAge(response.data.data.attributes.age)
    }

    return (
        <form onSubmit={editPerson} className="m-3">
            <div className="m-2">
                <span className="">Person ID:</span>
                <span className="m-3">{id}</span>
                <button type="button" className="btn btn-primary" onClick={getPersonById}>Get Person</button>
            </div>

            <div className="row">
                <div className='col-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Last Name</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Age</label>
                        <input
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                </div>
            </div>

            <ButtonSave title="Save" />
        </form>
    )
}

export default EditPerson;