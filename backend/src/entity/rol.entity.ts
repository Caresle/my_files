import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity
} from 'typeorm';

@Entity()
export class Rol extends BaseEntity {
	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		name: string;

	@Column({
		name: 'idRights'
	})
		idRights: number;
}
