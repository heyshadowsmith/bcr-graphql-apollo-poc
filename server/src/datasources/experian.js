const { RESTDataSource } = require('apollo-datasource-rest');

class experianSearchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:5000/api/v1/experian/'
    }

    async searchExperian(BusinessName, StreetAddress, City, State, Zip) {
        return this.post(
            `search`, // path
            {
                "businessName": BusinessName,
                "street": StreetAddress,
                "city": City,
                "state": State,
                "zip": Zip
            } // request body
        );
      }
}

module.exports = experianSearchAPI;