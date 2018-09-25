import axios from 'axios';
import { API } from '../environment';

const endpoint = `${API}/todos`;

export default {
  fetchTodos: () => axios.get(endpoint),
};
