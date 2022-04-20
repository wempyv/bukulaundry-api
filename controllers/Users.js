import Users from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const Register = async (req, res) => {
    const { name, email, password, confPassword, id_laundry, address, whatsapp_number } = req.body;

    if (password !== confPassword) return res.status(400).json({ msg: 'Password dan Konfirmasi Password tidak cocok !' })

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)

    const emailValidation = await Users.findAll({
        where: {
            email: email
        }
    });

    const whatsappValidation = await Users.findAll({
        where: {
            whatsapp_number: whatsapp_number
        }
    });


    // Email Validation
    if (emailValidation[0]) {
        return res.status(400).json({ msg: 'Email Sudah Terdaftar' })
    }

    // Whatsapp Number Validation
    if (whatsappValidation[0]) {
        return res.status(400).json({ msg: 'Nomor Sudah Terdaftar' })
    }


    try {
        await Users.create({
            email: email,
            password: hashPassword,
            id_laundry: id_laundry,
            name: name,
            address: address,
            whatsapp_number: whatsapp_number
        });
        res.json({ msg: 'Register Berhasil' });
    } catch (error) {
        console.log(error)
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });

        const match = await bcrypt.compare(req.body.password, user[0].password);

        // Authe 2 Factor Password
        if (!match) return res.status(400).json({ msg: 'Password salah' });

        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const id_laundry = user[0].id_laundry;
        const address = user[0].address;
        const whatsapp_number = user[0].whatsapp_number;
        const price_wash_rubbing = user[0].price_wash_rubbing;
        const price_rubbing = user[0].price_rubbing;
        const price_wash = user[0].price_wash;
        const service_fee = user[0].service_fee;

        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });

        const refreshToken = jwt.sign({ userId, name, email, id_laundry, address, whatsapp_number, price_wash_rubbing, price_rubbing, price_wash, service_fee }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({ msg: 'Email tidak ditemukan' });
    }
}

export const updateUser = async (req, res) => {
    const { name, email, password, address, whatsapp_number, price_wash_rubbing, price_rubbing, price_wash, service_fee, payment_method } = req.body

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)

    const body = {
        email: email,
        password: hashPassword,
        name: name,
        address: address,
        whatsapp_number: whatsapp_number,
        price_wash_rubbing: price_wash_rubbing,
        price_rubbing: price_rubbing,
        price_wash: price_wash,
        service_fee: service_fee,
        payment_method: payment_method
    }

    try {
        await Users.update(body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Users auth Updated"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200)
}

export const getLaundryById = async (req, res) => {
    try {
        const users = await Users.findAll({
            where: {
                id_laundry: req.params.id
            }
        });
        res.json(users[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getLaundry = async (req, res) => {
    try {
        const users = await Users.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(users[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}