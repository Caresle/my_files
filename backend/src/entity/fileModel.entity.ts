import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity
} from 'typeorm';

@Entity()
export class FileModel extends BaseEntity {
	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		path: string;

	@Column()
		idUser: number;
}
