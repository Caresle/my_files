import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class FileEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        default: '',
        name: 'file_name',
    })
        fileName: string;

    @Column()
        path: string;

    @ManyToOne(() => User, (user) => user.files)
        user: User;
    
	@Column({
		type: 'timestamp',
		name: 'created_at',
        default: new Date(),
	})
		createAt: Date;

    @Column({
        type: 'timestamp',
        name: 'updated_at',
        default: null,
    })
        updatedAt: Date;
};