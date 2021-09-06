import {useState} from 'react';

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
    const [userInput, setUserInput] = useState('')
    const HandleLogin = (user) => {
        setUser(user)
        setIsLoggedIn(true)
    }
    return (
        <form className="formUser">
            <input
                className="userName"
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <button className="login" onClick={() => HandleLogin(userInput)}>Access with name</button>
        </form>
    )
}

export default GetUserComponent;