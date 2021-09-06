const WelcomePage = ({ setIsLoggedIn, user }) => {
    let text = `Welcome, ${user}`
    let buttonText = "Logout"

    const HandleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div className="welcome">
            <h2 className="texto">{text}</h2>
            <button className="botao" onClick={HandleLogout}>{buttonText}</button>
        </div>
    )
}

export default WelcomePage;