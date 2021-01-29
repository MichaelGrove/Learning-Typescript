import { Request, Response, NextFunction } from 'express'
import { controller, get, use } from './decorators'

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.redirect('/auth/login');
}

@controller('')
class IndexController {

  @get('/')
  @use(requireAuth)
  index(req: Request, res: Response) {
    res.send(`
      <div>
        <h1>hello, world</h1>
        <a href="/auth/logout">Logout</a>
      </div>
    `)
  }

}
