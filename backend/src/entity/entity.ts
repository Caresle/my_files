import { User } from "./user.entity";
import { FileEntity } from "./file.entity";

export const entitiesList = {
	user: User,
    file: FileEntity,
};

const entities = [
	entitiesList.user,
	entitiesList.file,
];

export default entities;