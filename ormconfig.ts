import { User } from 'src/user/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5435,
    username: 'root',
    password: 'root',
    entities: [User],
    synchronize: true,
};

export default config;
