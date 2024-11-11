import { FC, memo, useMemo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Permission {
	export type Props = {
		user: TSampleComponent.User;
	};
};

export const Permission: FC<Permission.Props> = memo(({ user }) => {
	const text = useMemo(() => {
		if (user.permission === 'Admin') {
			return "管理者";
		};

		if (user.permission === 'Basic') {
			return "一般";
		};

		if (user.permission === 'Guest') {
			return "ゲスト";
		}

		return "不明";
	}, [user.permission]);

	return (
		<p>権限：{text}</p>
	);
});