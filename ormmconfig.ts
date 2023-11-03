import { User } from 'src/user/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5435,
    username: 'postgres',
    password: 'postgres',
    entities: [User],
    synchronize: true,
};
