import Users from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.sendStatus(403);

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);

            const payment_method = user[0].payment_method;
            const idLaundry = user[0].id_laundry;
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const address = user[0].address;
            const whatsapp_number = user[0].whatsapp_number;
            const price_wash_rubbing = user[0].price_wash_rubbing;
            const price_rubbing = user[0].price_rubbing;
            const price_wash = user[0].price_wash;
            const service_fee = user[0].service_fee;

            const accessToken = jwt.sign({ idLaundry, userId, name, email, address, whatsapp_number, price_wash_rubbing, price_rubbing, price_wash, service_fee, payment_method }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({ accessToken })
        })

    } catch (error) {
        console.log(error);
    }
}