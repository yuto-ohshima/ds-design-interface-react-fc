import { FC } from "react";
import { User } from "./components";
import { TSampleComponent } from "../_type";

export const Sample2: FC = () => {
	return (
		<div>
			<User
				nameContext={{
					name: TSampleComponent.User.name
				}}
				nameKanaContext={{
					nameKana: TSampleComponent.User.nameKana
				}}
				permissionContext={{
					permission: TSampleComponent.User.permission
				}}
				ageContext={{
					age: TSampleComponent.User.age
				}}
			/>
		</div>
	)
};