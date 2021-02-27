/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSign = /* GraphQL */ `
  query GetSign($id: ID!) {
    getSign(id: $id) {
      id
      name
      startDate
      endDate
      symbol
      house
      planet
      element
      quality
      polarity
      Dailies {
        items {
          id
          date
          signID
          source
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSigns = /* GraphQL */ `
  query ListSigns(
    $filter: ModelSignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startDate
        endDate
        symbol
        house
        planet
        element
        quality
        polarity
        Dailies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDaily = /* GraphQL */ `
  query GetDaily($id: ID!) {
    getDaily(id: $id) {
      id
      date
      signID
      source
      content
      sign {
        id
        name
        startDate
        endDate
        symbol
        house
        planet
        element
        quality
        polarity
        Dailies {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDailys = /* GraphQL */ `
  query ListDailys(
    $filter: ModelDailyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        signID
        source
        content
        sign {
          id
          name
          startDate
          endDate
          symbol
          house
          planet
          element
          quality
          polarity
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      private
      date
      title
      content
      likes
      createdAt
      updatedAt
    }
  }
`;
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        private
        date
        title
        content
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
