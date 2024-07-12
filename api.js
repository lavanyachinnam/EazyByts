// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Adjust the base URL as necessary

export const getContacts = () => axios.get(`${API_BASE_URL}/contacts`);
export const addContact = (contact) => axios.post(`${API_BASE_URL}/contacts`, contact);

export const getSales = () => axios.get(`${API_BASE_URL}/sales`);
export const addSale = (sale) => axios.post(`${API_BASE_URL}/sales`, sale);

export const getSupportTickets = () => axios.get(`${API_BASE_URL}/support-tickets`);
export const addSupportTicket = (ticket) => axios.post(`${API_BASE_URL}/support-tickets`, ticket);

export const getTasks = () => axios.get(`${API_BASE_URL}/tasks`);
export const addTask = (task) => axios.post(`${API_BASE_URL}/tasks`, task);
