const ShortnerController = require('../../api-assets/controllers/ShortnerController');

module.exports = async (req, res) => {

    const {
        query: { slug }

    } = req;

    try {
        const link = (await ShortnerController.getLink({ slug })).link;
        
        if( !link ) {
            throw new Error('Código inválido');
        }

        res.redirect(link);

    } catch({ message }) {
        res.status(500).json({ message });
    }
}