import { productsMockData } from '@/shared/lib';
import { createRequest } from '@/shared/api/intance';

export const getProducts = () => createRequest<ProductsResponse>(productsMockData);
