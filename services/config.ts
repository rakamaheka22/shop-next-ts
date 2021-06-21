import axios from 'axios';

import * as Config from '../config';

export const BaseApiUrl = Config.baseUrl;
export const DataService = axios.create({ baseURL: BaseApiUrl });
