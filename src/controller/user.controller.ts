import { Request, Response } from "express";
interface IReq {
  email: string;
  number: string;
}
class user {
  async getUser(req: Request<any, any, IReq>, res: Response) {
      setTimeout(() => {
        const { email, number } = req.body;
      const data = [
        {
          email: "jim@gmail.com",
          number: "221122",
        },
        {
          email: "jam@gmail.com",
          number: "830347",
        },
        {
          email: "john@gmail.com",
          number: "221122",
        },
        {
          email: "jams@gmail.com",
          number: "349425",
        },
        {
          email: "jams@gmail.com",
          number: "141424",
        },
        {
          email: "jill@gmail.com",
          number: "822287",
        },
        {
          email: "jill@gmail.com",
          number: "822286",
        },
      ];

      if (!email.includes("@"))
        return res.status(404).json("Почта написана в неправильном формате");
      if (!Number(number) === true)
        return res.status(404).json("Номер написан в неверном формате");

      if (data.some((el) => el.email === email && el.number === number))
        return res.json("Есть такой пользователь.");
      else if (data.some((el) => el.email === email))
        return res.json("Есть пользователь с такой почтой");
      else if (data.some((el) => el.number === number))
        return res.json("Есть пользователь с таким номером");
      else return res.status(404).json("Такого пользователя нет");
      }, 5000)
    }
}
export default new user();
