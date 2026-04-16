import { Customer, Customers } from '@models/sales';

const customer: Customer = {
  email: 'teste@test.com',
  firstName: 'Guilherme',
  lastName: 'Santiago',
  id: '1234'
};

const customers: Customers = [customer];

const funcao = (variavel: string) => console.log(variavel);

funcao('Hello World');