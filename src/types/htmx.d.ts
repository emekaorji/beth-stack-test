declare namespace JSX {
	interface HtmlTag extends Htmx.Attributes {
		['hx-get']?: string;
		['hx-post']?: string;
		['hx-put']?: string;
		['hx-delete']?: string;
		['hx-patch']?: string;
		['hx-swap']?: string;
		['hx-trigger']?: string;
		_?: string;
	}
}
