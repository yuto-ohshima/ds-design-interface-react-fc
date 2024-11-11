import { FC, memo } from "react";
import { TSampleComponent } from "../../../../_type";

type Props = Pick<TSampleComponent.User, 'nameKana'>;

export const NameKana: FC<Props> = memo(({ nameKana }) => {
	return (
		<p>ふりがな：{nameKana}</p>
	);
});