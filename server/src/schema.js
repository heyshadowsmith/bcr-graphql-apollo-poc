const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        experianSearchResults(input: LocateExperianSearchResultsInput): [ExperianSearchResult]!
        experianSearchResult: ExperianSearchResult
    }

    input LocateExperianSearchResultsInput {
        BusinessName: String!
        StreetAddress: String!
        City: String!
        State: String!
        Zip: String!
    }

    type ExperianSearchResult {
        ExperianBIN: String!,
        BusinessAssociationType: String!,
        BusinessName: String!,
        StreetAddress: String!,
        City: String!,
        State: String!,
        Zip:String!,
        NumberOfTradeLines: String!,
        FileEstablishedDate: String!,
        PublicRecordDataIndicator: String!,
        CollectionIndicator: String!,
        UCCIndicator: String!
    }
`;

module.exports = typeDefs;