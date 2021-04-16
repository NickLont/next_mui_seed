// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    isLoggedIn: true,
    login: 'NickLont',
    username: 'NickLont',
    password: '123123',
    avatarUrl: 'https://avatars.githubusercontent.com/u/17071000?v=4'
  }
]

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
