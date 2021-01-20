/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listOrganizations = /* GraphQL */ `
  query ListOrganizations($limit: Int, $nextToken: String) {
    listOrganizations(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      address
      productTypes
      acquisition
      taskStatusTypes
      paymentMethod
      acounts
      discounts
      funcRegion
      funcIdentityPoolId
      funcName
      funcSource
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($PK: String!, $SK: String!) {
    getOrganization(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      address
      productTypes
      acquisition
      taskStatusTypes
      paymentMethod
      acounts
      discounts
      funcRegion
      funcIdentityPoolId
      funcName
      funcSource
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers($limit: Int, $nextToken: String) {
    listCustomers(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      names
      emails
      addresses
      leadStatus
      seekingService
      adquisition
      account
      notes
      name
      address
      productTypes
      acquisition
      taskStatusTypes
      paymentMethod
      acounts
      discounts
      funcRegion
      funcIdentityPoolId
      funcName
      funcSource
      subject
      introduction
      conclusion
      internalComments
      emailSent
      sentDate
      sentBy
      isDiscount
      isInstallment
      downPayment
      numInstallments
      disccountAmount
      disccount
      quotationAmount
      finalAmount
      paymentStatus
      orderNumber
      processStatus
      description
      price
      typeName
      otherType
      isRecurrent
      isVariant
      variants
      variantName
      variantPrice
      taskStatus
      taskStart
      taskEnd
      taskNameResponsible
      startDate
      amount
      isPaid
      reference
      method
      payDate
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($PK: String!, $SK: String!) {
    getCustomer(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      names
      emails
      addresses
      phones
      leadStatus
      seekingService
      adquisition
      account
      notes
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts($limit: Int, $nextToken: String) {
    listProducts(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      description
      price
      typeName
      otherType
      isRecurrent
      isVariant
      variants
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($PK: String!, $SK: String!) {
    getProduct(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      description
      price
      typeName
      otherType
      isRecurrent
      isVariant
      variants
    }
  }
`;
export const listQuotes = /* GraphQL */ `
  query ListQuotes($limit: Int, $nextToken: String) {
    listQuotes(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      subject
      introduction
      conclusion
      internalComments
      emailSent
      sentDate
      sentBy
      isDiscount
      isInstallment
      downPayment
      numInstallments
      discountAmount
      discount
      quotationAmount
      finalAmount
      paymentStatus
      orderNumb
      processStatus
    }
  }
`;
export const getQuote = /* GraphQL */ `
  query GetQuote($PK: String!, $SK: String!) {
    getQuote(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      subject
      introduction
      conclusion
      internalComments
      emailSent
      sentDate
      sentBy
      isDiscount
      isInstallment
      downPayment
      numInstallments
      discountAmount
      discount
      quotationAmount
      finalAmount
      paymentStatus
      orderNumb
      processStatus
    }
  }
`;
export const listQuoteItems = /* GraphQL */ `
  query ListQuoteItems($limit: Int, $nextToken: String) {
    listQuoteItems(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      description
      price
      typeName
      otherType
      isRecurrent
      isVariant
      variantName
      variantPrice
      internalComments
      taskStatus
      taskStart
      taskEnd
      taskNameresp
    }
  }
`;
export const getQuoteItem = /* GraphQL */ `
  query GetQuoteItem($PK: String!, $SK: String!) {
    getQuoteItem(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      description
      price
      typeName
      otherType
      isRecurrent
      isVariant
      variantName
      variantPrice
      internalComments
      taskStatus
      taskStart
      taskEnd
      taskNameresp
    }
  }
`;
export const listInstallments = /* GraphQL */ `
  query ListInstallments($limit: Int, $nextToken: String) {
    listInstallments(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      startDate
      amount
      isPaid
      reference
      method
      payDate
    }
  }
`;
export const getInstallment = /* GraphQL */ `
  query GetInstallment($PK: String!, $SK: String!) {
    getInstallment(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      startDate
      amount
      isPaid
      reference
      method
      payDate
    }
  }
`;
export const listEmployee = /* GraphQL */ `
  query ListEmployee($limit: Int, $nextToken: String) {
    listEmployee(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      email
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($PK: String!, $SK: String!) {
    getEmployee(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      name
      email
    }
  }
`;
export const listLogs = /* GraphQL */ `
  query ListLogs($limit: Int, $nextToken: String) {
    listLogs(limit: $limit, nextToken: $nextToken) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      table
      type
      idRegistry
      value
    }
  }
`;
export const getLogs = /* GraphQL */ `
  query GetLogs($PK: String!, $SK: String!) {
    getLogs(PK: $PK, SK: $SK) {
      GSP1PK1
      GSP1SK1
      GSP2PK1
      GSP2SK1
      GSP3PK1
      GSP3SK1
      PK
      SK
      id
      entityType
      createdAt
      updateAt
      active
      createdBy
      table
      type
      idRegistry
      value
    }
  }
`;