import React, { useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { ButtonSave } from "../../components/Buttons/Buttons";

const endpoint = 'http://localhost:1337/api/persons'

const AddPerson = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const router = useRouter();

    const addPerson = async (e) => {
        e.preventDefault()
        const send = await axios.post(endpoint, {
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

    return (
        <form onSubmit={addPerson}>
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
            <div className='row'>
                <div className='col-12'>
                    <div className='mb-3'>
                        <label className='form-label'>LastName</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                </div>
            </div>

            <div className='row'>
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

export default AddPerson;