import { FC, memo, useMemo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Name {
	export type Props = {
		user: TSampleComponent.User;
	};
};

export const Name: FC<Name.Props> = memo(({ user }) => {
	const text = useMemo(() => {
		return user.name;
	}, [user.name]);

	return (
		<p>名前：{text}</p>
	);
});