import { FC, memo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace NameKana {
	export type Props = Pick<TSampleComponent.User, 'nameKana'>;
}

export const NameKana: FC<NameKana.Props> = memo(({ nameKana }) => {
	return (
		<p>ふりがな：{nameKana}</p>
	);
});