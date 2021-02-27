/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSign = /* GraphQL */ `
  subscription OnCreateSign {
    onCreateSign {
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
export const onUpdateSign = /* GraphQL */ `
  subscription OnUpdateSign {
    onUpdateSign {
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
export const onDeleteSign = /* GraphQL */ `
  subscription OnDeleteSign {
    onDeleteSign {
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
export const onCreateDaily = /* GraphQL */ `
  subscription OnCreateDaily {
    onCreateDaily {
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
export const onUpdateDaily = /* GraphQL */ `
  subscription OnUpdateDaily {
    onUpdateDaily {
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
export const onDeleteDaily = /* GraphQL */ `
  subscription OnDeleteDaily {
    onDeleteDaily {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
