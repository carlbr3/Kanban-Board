import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { TicketFactory } from './ticket.js';
const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);
User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser' });
export { sequelize, User, Ticket };
