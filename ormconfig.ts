import { Comment } from 'src/comment/entities/comment.entity';
import { Topic } from 'src/topic/entities/topic.entity';
import { User } from 'src/user/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5435,
    username: 'root',
    password: 'root',
    entities: [User, Comment, Topic],
    synchronize: true,
};

export default config;
