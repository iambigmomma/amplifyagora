// eslint-disable
// this is an auto generated file. This will be overwritten

export const createMarket = `mutation CreateMarket($input: CreateMarketInput!) {
  createMarket(input: $input) {
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
export const updateMarket = `mutation UpdateMarket($input: UpdateMarketInput!) {
  updateMarket(input: $input) {
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
export const deleteMarket = `mutation DeleteMarket($input: DeleteMarketInput!) {
  deleteMarket(input: $input) {
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
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
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
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
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
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
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
export const registerUser = `mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    id
    username
    email
    registered
    orders {
      items {
        id
        createdAt
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    email
    registered
    orders {
      items {
        id
        createdAt
      }
      nextToken
    }
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    product {
      id
      market {
        id
        name
        owner
        tags
        createdAt
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
    user {
      id
      username
      email
      registered
      orders {
        nextToken
      }
    }
    shippingAddress {
      city
      country
      address_line1
      address_state
      address_zip
    }
    createdAt
  }
}
`;
