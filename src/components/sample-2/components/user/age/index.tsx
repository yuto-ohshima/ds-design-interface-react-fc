import { FC, memo } from "react";
import { TSampleComponent } from "../../../../_type";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Age {
	export type Props = Pick<TSampleComponent.User, "age">;
}

export const Age: FC<Age.Props> = memo(({ age }) => {
	return (
		<p>年齢：{age}</p>
	);
});