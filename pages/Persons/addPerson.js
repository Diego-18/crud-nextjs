import Title from "../../components/Title/Title";
import AddPersonForm from "../../components/Persons/AddPersonForm";
import { useRouter } from 'next/router'

export default function addPerson() {
    return (
        <div className="app">
            <div className="container">
                <div className="card card-dark mt-5 mb-5">
                    <div className='container'>
                        <div className="card mt-5 mb-5">
                            <Title title="Add Person" />

                            <div className="card-body">
                                <AddPersonForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}