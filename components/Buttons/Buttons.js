import { useRouter } from "next/router";

function ButtonBack(props) {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} className="btn btn-secondary btn-sm">{props.title}</button>
    )
}

function ButtonSave(props) {
    return (
        <button type="submit" className="btn btn-success btn-sm">{props.title}</button>
    )
}

export { ButtonBack, ButtonSave };