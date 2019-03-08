// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateMarket = `subscription OnCreateMarket {
  onCreateMarket {
    id
    name
    owner
    tags
    createdAt
    products {
      items {
        id
        description
        price
        shipped
        owner
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onUpdateMarket = `subscription OnUpdateMarket {
  onUpdateMarket {
    id
    name
    owner
    tags
    createdAt
    products {
      items {
        id
        description
        price
        shipped
        owner
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onDeleteMarket = `subscription OnDeleteMarket {
  onDeleteMarket {
    id
    name
    owner
    tags
    createdAt
    products {
      items {
        id
        description
        price
        shipped
        owner
        createdAt
      }
      nextToken
    }
  }
}
`;
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
    id
    market {
      id
      name
      owner
      tags
      createdAt
      products {
        nextToken
      }
    }
    description
    file {
      bucket
      region
      key
    }
    price
    shipped
    owner
    createdAt
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
    id
    market {
      id
      name
      owner
      tags
      createdAt
      products {
        nextToken
      }
    }
    description
    file {
      bucket
      region
      key
    }
    price
    shipped
    owner
    createdAt
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
    id
    market {
      id
      name
      owner
      tags
      createdAt
      products {
        nextToken
      }
    }
    description
    file {
      bucket
      region
      key
    }
    price
    shipped
    owner
    createdAt
  }
}
`;
