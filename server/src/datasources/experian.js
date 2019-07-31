const { RESTDataSource } = require('apollo-datasource-rest');

class experianSearchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:5000/api/v1/experian/'
    }

    async searchExperian() {
        return this.post(
            `search`, // path
            {
                "businessName": "CROCKER INDUSTRIES",
                "street": "A",
                "city": "PHOENIX",
                "state": "AZ",
                "zip": "00001"
            } // request body
        );
      }
}

module.exports = experianSearchAPI;