export type TextProps = {
	children?: React.ReactNode;
	className?: string;
};

export function TypographyH1({ children, className }: TextProps) {
	return (
		<h1
			className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}
		>
			{children}
		</h1>
	);
}

export function TypographyH2({ children, className }: TextProps) {
	return (
		<h2
			className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
		>
			{children}
		</h2>
	);
}

export function TypographyH3({ children, className }: TextProps) {
	return (
		<h3
			className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
		>
			{children}
		</h3>
	);
}

export function TypographyH4({ children, className }: TextProps) {
	return (
		<h4
			className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
		>
			{children}
		</h4>
	);
}

export function TypographyP({ children, className }: TextProps) {
	return (
		<p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
			{children}
		</p>
	);
}

export function TypographyBlockquote({ children, className }: TextProps) {
	return (
		<blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
			{children}
		</blockquote>
	);
}
