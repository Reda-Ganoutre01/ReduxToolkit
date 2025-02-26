import { useSelector } from "react-redux"
import { userSelector } from "./selectors/UserSelectors"

export default function User() {
    const user = useSelector(userSelector)
    return <>
    {user.name && <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">{user.name} ({user.age} years)</h1>
        <div className="mx-auto">
            <p className="lead mb-4">
                <img src={`https://flagcdn.com/48x36/${user.country}.png`}/>
            </p>
        </div>
    </div>}

</>
}
