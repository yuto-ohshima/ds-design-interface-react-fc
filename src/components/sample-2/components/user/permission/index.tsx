import { FC, memo, useMemo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Permission {
	export type Props = Pick<TSampleComponent.User, 'permission'>;
};

export const Permission: FC<Permission.Props> = memo(({ permission }) => {
	const text = useMemo(() => {
		if (permission === 'Admin') {
			return "管理者";
		};

		if (permission === 'Basic') {
			return "一般";
		};

		if (permission === 'Guest') {
			return "ゲスト";
		}

		return "不明";
	}, [permission]);

	return (
		<p>権限：{text}</p>
	);
});