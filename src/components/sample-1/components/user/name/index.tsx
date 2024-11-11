import { FC, memo } from "react";
import { TSampleComponent } from "../../../../_type";

type Props = Pick<TSampleComponent.User, 'name'>;

export const Name: FC<Props> = memo(({ name }) => {
	return (
		<p>名前：{name}</p>
	);
});