import cryptoRandomString from 'crypto-random-string';

 export const randomString =  () =>cryptoRandomString({length: 6, type: 'distinguishable'})
  
 


