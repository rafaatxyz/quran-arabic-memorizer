export interface VerseWord {
	id: number,
	position: number,
	audio_url: string,
	char_type_name: string,
	code_v1: string,
	page_number: number,
	line_number: number,
	text: string,
	translation: {
		text: string,
		language_name: string
	},
	transliteration: {
		text: string,
		language_name: string
	}
}