import { FC, memo } from "react";
import { Name } from "./name";
import { NameKana } from "./name-kana";
import { Permission } from "./permission";
import { Age } from "./age";

type Props = {
	nameContext: Name.Props;
	nameKanaContext: NameKana.Props;
	permissionContext: Permission.Props;
	ageContext: Age.Props;
};

export const User: FC<Props> = memo(({
	nameContext,
	nameKanaContext,
	permissionContext,
	ageContext,
}) => {
	return (
		<div>
			{/* 名前 */}
			<Name {...nameContext} />
			{/* ふりがな */}
			<NameKana {...nameKanaContext} />
			{/* 権限 */}
			<Permission {...permissionContext} />
			{/* 年齢 */}
			<Age {...ageContext} />
		</div>
	);
});