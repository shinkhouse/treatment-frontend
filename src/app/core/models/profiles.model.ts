import { Deserializable } from './deserialize.model';

export class profiles implements Deserializable {
	profile_id: number;
	first_name: string;
	last_name: string;
	title: string;
	email: string;
	created_by: number;
	created_ts: Date;
	updated_ts: Date;

	deserialize(input: this | any): this {
		Object.assign(this, input);
		return this;
	}
}
