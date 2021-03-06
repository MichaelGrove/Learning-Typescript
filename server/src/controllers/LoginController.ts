import { Request, Response } from 'express'
import { controller, get, post, bodyValidator } from './decorators'


@controller('/auth')
class LoginController {

  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
      <form method="POST">
        <h1>Login</h1>
        <div>
          <label>Email:</label>
          <input name="email" />
        </div>
        <div>
          <label>Password:</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </div>
    `)
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
  
    if (email && password && email === 'john.doe@example.com' && password === 'password') {
      req.session = { loggedIn: true }
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }


  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/auth/login')
  }
  
}
