const domains = require('../data/domain');

const getAllDomains = (req,res) => {
    res.status(200).json(domains);
}

module.exports = {getAllDomains};