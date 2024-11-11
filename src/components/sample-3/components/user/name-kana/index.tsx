import { FC, memo, useMemo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace NameKana {
	export type Props = {
		user: TSampleComponent.User;
	};
}

export const NameKana: FC<NameKana.Props> = memo(({ user }) => {
	const text = useMemo(() => {
		return user.nameKana;
	}, [user.nameKana]);

	return (
		<p>ふりがな：{text}</p>
	);
});