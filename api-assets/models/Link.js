const mongoose = require('../connection');
const crc32 = require('crc32');

const LinkStructure = {
    // slug: {
    //     type: String,
    //     slug: 'title',
    //     unique: true
    // },
    slug: {
        type: String,
        unique: false
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: false,
        validate: value => /^htt(p|ps):\/\/([a-zA-Z0-9]|\.|-)(\/|)/.test(value)
    }
};

const LinkSchema = mongoose.Schema(LinkStructure);

LinkSchema.pre('save', function(next) {
    this.slug = crc32(this.link);
    next();
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;