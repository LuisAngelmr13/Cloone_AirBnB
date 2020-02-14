const UserQuery = require('./UsersQuery');
const EventQuery = require ('./EventQuery');

module.exports = {
	...UserQuery,
	...EventQuery,
};