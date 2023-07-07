import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity
} from 'typeorm';

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
		nullable: true
	})
		token: string;

	@Column({
		default: true
	})
		active: boolean;

	@Column({
		name: 'id_rol',
		nullable: true,
	})
		idRol: number;
}
