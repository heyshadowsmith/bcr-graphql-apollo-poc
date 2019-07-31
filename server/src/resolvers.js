module.exports = {
    Query: {
        experianSearchResults: (parent, args, { dataSources }, info) => {
            return dataSources.experianSearchAPI.searchExperian(args.input.BusinessName, args.input.StreetAddress, args.input.City, args.input.State, args.input.Zip)
        }
    }
}