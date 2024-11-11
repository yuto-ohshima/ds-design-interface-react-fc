import { FC, memo } from "react";
import { TSampleComponent } from "../../../_type";
import { Name } from "./name";
import { NameKana } from "./name-kana";
import { Permission } from "./permission";
import { Age } from "./age";

type Props = {
	user: TSampleComponent.User;
};

export const User: FC<Props> = memo(({ user }) => {
	return (
		<div>
			<Name name={user.name} />
			<NameKana nameKana={user.nameKana} />
			<Permission permission={user.permission} />
			<Age age={user.age} />
		</div>
	);
});