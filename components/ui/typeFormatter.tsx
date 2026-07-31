import React, { ReactNode } from "react";

interface TypeFormatterProps{
	children: ReactNode;
	className?: string;
}

export default function TypeFormatter({ children, className = '' }: TypeFormatterProps) {
	return (
		<span className="font-medium">
			{children}
		</span>
	);
}
