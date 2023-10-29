import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
} from 'typeorm';
import { FileEntity } from './file.entity';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		username: string;

	@Column()
		password: string;

	@Column({
		default: '',
		nullable: true,
	})
		token: string;

	@ManyToOne(() => FileEntity, (file) => file.user)
		files: FileEntity[];

	@Column({
		default: true
	})
		active: boolean;
}