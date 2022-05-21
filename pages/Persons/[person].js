import Title from "../../components/Title/Title";
import EditPersonForm from "../../components/Persons/EditPersonForm";
import { useRouter } from "next/router";

export default function editPerson() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const id = router.query.person;

    return (
        <div className="app">
            <div className="container">
                <div className="card card-dark mt-5 mb-5">
                    <div className='container'>
                        <div className="card mt-5 mb-5">
                            <Title title="Edit Person" />
                            <EditPersonForm person={id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}