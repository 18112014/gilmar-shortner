const Link = require('../models/Link');

const ShortnerController = {
    create: async payload => {

        // retorna o documento existente, caso possivel
        const existent = await Link.findOne({ link: payload.link }, 'link');
        if( existent ) {
            return existent;
        }


        return Link.create(payload)
    },
    getLink: payload => Link.findOne(payload, 'link')
};

module.exports = ShortnerController;