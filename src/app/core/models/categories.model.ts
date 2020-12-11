import { Deserializable } from './deserialize.model';

export class categories implements Deserializable {
	category_id: number;
	category_name: string;
	color: string;
	created_by: number;
	created_ts: Date;
	updated_ts: Date;

	deserialize(input: this | any): this {
		Object.assign(this, input);
		return this;
	}
}
