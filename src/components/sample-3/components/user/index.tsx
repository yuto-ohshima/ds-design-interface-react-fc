import { FC, memo } from "react";
import { Name } from "./name";
import { NameKana } from "./name-kana";
import { Permission } from "./permission";
import { Age } from "./age";

type IntersectedProps = Name.Props & NameKana.Props & Permission.Props & Age.Props;
type Props = {
	childrenContext: IntersectedProps;
};

export const User: FC<Props> = memo(({ childrenContext }) => {
	return (
		<div>
			{/* 名前 */}
			<Name {...childrenContext} />
			{/* ふりがな */}
			<NameKana {...childrenContext} />
			{/* 権限 */}
			<Permission {...childrenContext} />
			{/* 年齢 */}
			<Age {...childrenContext} />
		</div>
	);
});