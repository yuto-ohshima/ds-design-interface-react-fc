import { FC, memo } from "react";
import { TSampleComponent } from "../../../../_type";

type Props = Pick<TSampleComponent.User, 'age'>;

export const Age: FC<Props> = memo(({ age }) => {
	return (
		<p>年齢：{age}</p>
	);
});