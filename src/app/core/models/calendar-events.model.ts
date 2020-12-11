import { Deserializable } from "./deserialize.model";

export class CalendarEvent implements Deserializable {
	calendar_event_id: number;
	name: string;
	category_id: number;
	topic_id: number;
	question_id: number;
	event_datetime: Date;
	created_by: number;
	created_ts: Date;
	updated_ts: Date;

	deserialize(input: this | any): this {
		Object.assign(this, input);
		return this;
	}
}
