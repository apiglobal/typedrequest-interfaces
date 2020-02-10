import { expect, tap } from '@pushrocks/tapbundle';
import * as typedrequestInterfaces from '../ts/index';

interface IRequestSample extends typedrequestInterfaces.implementsTR<typedrequestInterfaces.ITypedRequest, IRequestSample> {
  method: 'hey';
  request: {};
  response: {};
}

tap.test('first test', async () => {
  typedrequestInterfaces;
});

tap.start();
