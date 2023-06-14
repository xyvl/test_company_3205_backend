import {
  Request,
  Response,
} from "express"
interface IReq {
  email: string;
}
class user {
  async getUser(req: Request<any, any, IReq>, res: Response) {
    const { email } = req.body;

    res.json(email)
  }
}
export default new user()
