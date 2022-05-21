import { ButtonBack } from "../../components/Buttons/Buttons";

export default function Title(props) {
    return (
        <div className="card-header bg-primary">
            <div className="row">
                <div className="col-2">
                    <ButtonBack title="Back" />
                </div>

                <div className="col-10 text-center text-white">
                    <h3 className="title-card">{props.title}</h3>
                </div>
            </div>
        </div>
    );
}