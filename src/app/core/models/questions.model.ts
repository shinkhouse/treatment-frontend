import { Deserializable } from './deserialize.model';

export class questions implements Deserializable {
	question_id: number;
	question: string;
	category_id: number;
	created_by: number;
	created_ts: Date;
	updated_ts: Date;
	comments: string;

	deserialize(input: this | any): this {
		Object.assign(this, input);
		return this;
	}
}
