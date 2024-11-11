import { FC, memo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Name {
	export type Props = Pick<TSampleComponent.User, 'name'>;
};

export const Name: FC<Name.Props> = memo(({ name }) => {
	return (
		<p>名前：{name}</p>
	);
});