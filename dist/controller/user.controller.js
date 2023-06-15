"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            else
                return res.status(404).json("Такого пользователя нет");
        });
    }
}
exports.default = new user();
