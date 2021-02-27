/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSign = /* GraphQL */ `
  mutation CreateSign(
    $input: CreateSignInput!
    $condition: ModelSignConditionInput
  ) {
    createSign(input: $input, condition: $condition) {
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
export const updateSign = /* GraphQL */ `
  mutation UpdateSign(
    $input: UpdateSignInput!
    $condition: ModelSignConditionInput
  ) {
    updateSign(input: $input, condition: $condition) {
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
export const deleteSign = /* GraphQL */ `
  mutation DeleteSign(
    $input: DeleteSignInput!
    $condition: ModelSignConditionInput
  ) {
    deleteSign(input: $input, condition: $condition) {
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
export const createDaily = /* GraphQL */ `
  mutation CreateDaily(
    $input: CreateDailyInput!
    $condition: ModelDailyConditionInput
  ) {
    createDaily(input: $input, condition: $condition) {
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
export const updateDaily = /* GraphQL */ `
  mutation UpdateDaily(
    $input: UpdateDailyInput!
    $condition: ModelDailyConditionInput
  ) {
    updateDaily(input: $input, condition: $condition) {
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
export const deleteDaily = /* GraphQL */ `
  mutation DeleteDaily(
    $input: DeleteDailyInput!
    $condition: ModelDailyConditionInput
  ) {
    deleteDaily(input: $input, condition: $condition) {
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
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
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
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
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
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
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
