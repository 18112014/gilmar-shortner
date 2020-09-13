const ShortnerController = require('../api-assets/controllers/ShortnerController');

module.exports = async (req, res) => {
    const {
        body: { verb }
    } = req;

    try {
        switch( verb ) {
            case 'enshort': {
                const link = await ShortnerController.create(req.body);
                return res.status(200).end(`http://localhost:3000/api/redirect/${link.slug}`);
            }

            default:
                throw new Error('verbo invalido');
        }
    } catch({ message }) {
        res.status(500).json({ message });
    }
};