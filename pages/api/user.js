// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    isLoggedIn: true,
    login: 'NickLont',
    username: 'NickLont',
    password: '123123123',
    avatarUrl: 'https://avatars.githubusercontent.com/u/17071000?v=4'
  }
]

export default (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body
    const user = users.find((user) => user.username === username && user.password === password)
    console.log(username, password)
    console.log('user: ', user)
    console.log('req.body: ', req.body)
    if (user) {
      res.status(200).json({
        isLoggedIn: user.isLoggedIn,
        login: user.login,
        username: user.username,
        avatarUrl: user.avatarUrl
      })
    } else {
      console.log('no user')
      res.status(401).json({ error: '401 Unauthorized ' })
    }
  } else {
    // Handle any other HTTP method
    res.status(401).json({ error: '401 Unauthorized ' })
  }
}
