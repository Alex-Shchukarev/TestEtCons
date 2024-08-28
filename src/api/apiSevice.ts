import { dataString } from '../constants'

export const fetchAllStr = (): Promise<string> => new Promise(
    resolve => {
      window.setTimeout(() => { resolve(dataString); }, 2000);
    }
  );