import { Deserializable } from './deserialize.model';

export class Topic implements Deserializable {
	topic_id: number;
	topic_name: string;
	description: string;
	intervention: string;
	response: string;
	category_id: number;
	created_by: number;
	created_ts: Date;
	updated_ts: Date;

	deserialize(input: this | any): this {
		Object.assign(this, input);
		return this;
	}
}
