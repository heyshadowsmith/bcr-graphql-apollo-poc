module.exports = {
    Query: {
        experianSearchResults: (parent, args, { dataSources }, info) => dataSources.experianSearchAPI.searchExperian()
    }
}