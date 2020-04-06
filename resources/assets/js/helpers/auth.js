export function login(credentials)
{
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Wrong email or password");
            })
    })
}
export function getLocatUser() {
    const userStr = localStorage.getItem("user");

    if(!user)
    {
        return null;
    }
    return JSON.parse(userStr);

}
