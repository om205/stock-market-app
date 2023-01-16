const Login = () => {
    return (
        <>
            <div className="login-page">
                <div className="card">
                    <form>
                        <label htmlFor="Email">Email</label>
                        <input type="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login