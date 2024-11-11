import { FC, memo, useMemo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Age {
	export type Props = {
		user: TSampleComponent.User;
	};
};

export const Age: FC<Age.Props> = memo(({ user }) => {
	const text = useMemo(() => {
		return user.age;
	}, [user.age]);

	return (
		<p>年齢：{text}</p>
	);
});